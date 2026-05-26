import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Play,
  ChevronRight,
  Star,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import heroImage from "../imports/88b635bb-b31d-4045-b7c9-a340c111b1f9_-_Copy.jpg";
import ryanHerreraImage from "../imports/791af5e3-5de8-45cf-9c14-ebfd12465d75.jpg";
import markHerreraImage from "../imports/ChatGPT_Image_May_26__2026__04_13_44_PM.png";

export default function App() {
  const mentors = [
    {
      name: "Mark Herrera",
      title: "Leadership & Strategy",
      image: markHerreraImage,
      lessons: 12,
    },
    {
      name: "Ryan Herrera",
      title: "Entrepreneurship",
      image: ryanHerreraImage,
      lessons: 15,
    },
    {
      name: "Robert Novales",
      title: "Creative Direction",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      lessons: 10,
    },
    {
      name: "Owen Villaver",
      title: "Innovation & Technology",
      image:
        "https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      lessons: 14,
    },
  ];

  const categories = [
    { icon: Users, title: "Leadership", count: 25 },
    { icon: Award, title: "Business", count: 32 },
    { icon: BookOpen, title: "Creative Arts", count: 18 },
    { icon: Star, title: "Personal Growth", count: 21 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl tracking-tight">
              TOPSECRET ACADEMY
            </h1>
            <div className="hidden md:flex gap-8">
              <a
                href="#mentors"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Mentors
              </a>
              <a
                href="#categories"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Categories
              </a>
              <a
                href="#about"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                About
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm px-4 py-2 text-white/70 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="text-sm px-6 py-2 bg-white text-black hover:bg-white/90 transition-colors rounded">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <ImageWithFallback
          src={heroImage}
          alt="Mentor teaching"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
        />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl mb-6 tracking-tight">
            Learn From
            <br />
            The World's Best
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Get exclusive access to world-class mentors. Master
            new skills with personalized guidance from industry
            leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors rounded inline-flex items-center gap-2 justify-center">
              Start Learning
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-white/30 hover:bg-white/10 transition-colors rounded inline-flex items-center gap-2 justify-center">
              <Play className="w-5 h-5" />
              Watch Preview
            </button>
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section
        id="mentors"
        className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl mb-4">
              Featured Mentors
            </h3>
            <p className="text-xl text-white/60">
              Learn from pioneers and innovators in their fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded">
                  <ImageWithFallback
                    src={mentor.image}
                    alt={mentor.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${mentor.name === "Ryan Herrera" ? "object-[50%_30%]" : ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <BookOpen className="w-4 h-4" />
                      {mentor.lessons} Lessons
                    </div>
                  </div>
                </div>
                <h4 className="text-xl mb-1">{mentor.name}</h4>
                <p className="text-white/60">{mentor.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="py-24 px-6 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl mb-4">
              Explore Categories
            </h3>
            <p className="text-xl text-white/60">
              Discover courses across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="p-8 border border-white/10 rounded hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer group"
                >
                  <Icon className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
                  <h4 className="text-xl mb-2">
                    {category.title}
                  </h4>
                  <p className="text-white/60">
                    {category.count} courses
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-2xl mb-4">
                Expert Instruction
              </h4>
              <p className="text-white/60">
                Learn directly from industry leaders with
                decades of real-world experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-2xl mb-4">
                Community Access
              </h4>
              <p className="text-white/60">
                Join a thriving community of learners and
                receive personalized feedback
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-2xl mb-4">Lifetime Access</h4>
              <p className="text-white/60">
                Stream courses anywhere, anytime, and revisit
                lessons as many times as you need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl md:text-6xl mb-6">
            Start Your Journey Today
          </h3>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join thousands of learners transforming their
            careers with guidance from world-class mentors
          </p>
          <button className="px-10 py-5 bg-white text-black hover:bg-white/90 transition-colors rounded inline-flex items-center gap-2">
            Get Access Now
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="mb-4">Product</h5>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    All Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4">Company</h5>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4">Support</h5>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4">Follow Us</h5>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/60">
            <p>
              &copy; 2026 TopSecret Academy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}