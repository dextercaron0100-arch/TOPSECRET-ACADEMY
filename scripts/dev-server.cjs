const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const host = '127.0.0.1';
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
};

function send(res, statusCode, body, contentType = 'text/plain; charset=utf-8') {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(body);
}

function readFile(filePath, res) {
  fs.readFile(filePath, (readErr, data) => {
    if (readErr) {
      send(res, 404, 'Not found');
      return;
    }

    send(res, 200, data, mimeTypes[path.extname(filePath)] || 'application/octet-stream');
  });
}

const server = http.createServer((req, res) => {
  if (!fs.existsSync(distDir)) {
    send(
      res,
      500,
      'Missing dist/. Run the build first, then restart the local server.'
    );
    return;
  }

  const pathname = decodeURIComponent((req.url || '/').split('?')[0]);
  const normalizedPath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  let filePath = path.join(distDir, normalizedPath === '/' ? 'index.html' : normalizedPath);

  if (!filePath.startsWith(distDir)) {
    send(res, 403, 'Forbidden');
    return;
  }

  fs.stat(filePath, (statErr, stat) => {
    if (!statErr && stat.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.access(filePath, fs.constants.F_OK, accessErr => {
      if (accessErr) {
        filePath = path.join(distDir, 'index.html');
      }

      readFile(filePath, res);
    });
  });
});

server.listen(port, host, () => {
  console.log(`Local preview running at http://${host}:${port}/`);
});
