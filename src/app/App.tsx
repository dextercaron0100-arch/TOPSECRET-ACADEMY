import { useEffect, useState } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Play,
  ChevronRight,
  Check,
  Star,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import heroImage from "../imports/88b635bb-b31d-4045-b7c9-a340c111b1f9_-_Copy.jpg";
import ryanHerreraImage from "../imports/ryan-herrera-updated.png";
import markHerreraImage from "../imports/ChatGPT_Image_May_26__2026__04_13_44_PM.png";
import marvinHerreraBannerImage from "../imports/687039088_27210952171835268_4754694957016619653_n.jpg";
import marvinHerreraImage from "../imports/marvin-herrera-updated.png";
import arnelPoloImage from "../imports/asda.png";
import logoImage from "../imports/topsecret-academy-logo.png";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const revealClass = (extra = "") =>
    [
      "motion-reveal",
      "transform-gpu",
      "transition-all",
      "duration-700",
      "ease-out",
      isLoaded
        ? "opacity-100 translate-y-0 blur-0"
        : "opacity-0 translate-y-6 blur-[2px]",
      extra,
    ]
      .filter(Boolean)
      .join(" ");

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
      name: "Marvin Herrera",
      title: "The Future of Crypto",
      image: marvinHerreraImage,
      lessons: 10,
    },
    {
      name: "Arnel Polo",
      title: "Innovation & Technology",
      image: arnelPoloImage,
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-12">
            <img
              src={logoImage}
              alt="TOPSECRET ACADEMY"
              className="h-12 w-auto shrink-0 object-contain sm:h-14 md:h-16"
            />
            <div className="hidden md:flex gap-8">
              <a
                href="#mentors"
                className="text-sm text-white/70 motion-link hover:text-white hover:-translate-y-px inline-block"
              >
                Mentors
              </a>
              <a
                href="#categories"
                className="text-sm text-white/70 motion-link hover:text-white hover:-translate-y-px inline-block"
              >
                Categories
              </a>
              <a
                href="#about"
                className="text-sm text-white/70 motion-link hover:text-white hover:-translate-y-px inline-block"
              >
                About
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm px-4 py-2 text-white/70 motion-surface hover:text-white hover:-translate-y-px">
              Sign In
            </button>
            <button className="text-sm px-6 py-2 bg-white text-black rounded motion-surface hover:bg-white/90 hover:-translate-y-px hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] active:translate-y-0">
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
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%] hero-drift motion-safe:transform-gpu"
        />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h2
            className={revealClass("font-display text-6xl md:text-7xl mb-6 leading-[0.9] tracking-tight")}
            style={{ transitionDelay: "120ms" }}
          >
            Learn From
            <br />
            The World's Best
          </h2>
          <p
            className={revealClass("text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto")}
            style={{ transitionDelay: "260ms" }}
          >
            Get exclusive access to world-class mentors. Master new
            skills with personalized guidance from industry leaders.
          </p>
          <div
            className={revealClass("flex flex-col sm:flex-row gap-4 justify-center")}
            style={{ transitionDelay: "400ms" }}
          >
            <button className="px-8 py-4 bg-white text-black rounded inline-flex items-center gap-2 justify-center motion-surface hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] active:translate-y-0">
              Start Learning
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-white/30 rounded inline-flex items-center gap-2 justify-center motion-surface hover:bg-white/10 hover:border-white/50 hover:-translate-y-1 active:translate-y-0">
              <Play className="w-5 h-5" />
              Watch Preview
            </button>
          </div>
        </div>
      </section>

      {/* Spotlight Banner */}
      <section className="bg-black px-6 py-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3
            className={revealClass("font-display text-3xl md:text-4xl text-white")}
            style={{ transitionDelay: "80ms" }}
          >
            Meet the world's best.
            <br />
            New classes added every month.
          </h3>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            className={revealClass("relative overflow-hidden rounded-[28px] bg-black/80 shadow-[var(--surface-glow)]")}
            style={{ transitionDelay: "180ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent z-10" />
            <ImageWithFallback
              src={marvinHerreraBannerImage}
              alt="Marvin Herrera promotional banner"
              className="h-[560px] w-full object-cover object-[50%_8%] banner-drift motion-safe:transform-gpu"
            />
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-black px-6 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 md:grid-cols-3 pt-8">
            <div
              className={revealClass("flex gap-3")}
              style={{ transitionDelay: "80ms" }}
            >
              <Check className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-2 tracking-tight">
                  Lessons fit into your day
                </h4>
                <p className="text-white/60 leading-relaxed max-w-sm">
                  Learn at your pace, in any order with new classes added
                  every month.
                </p>
              </div>
            </div>
            <div
              className={revealClass("flex gap-3")}
              style={{ transitionDelay: "160ms" }}
            >
              <Check className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-2 tracking-tight">
                  Discover new passions
                </h4>
                <p className="text-white/60 leading-relaxed max-w-sm">
                  Get unlimited access to 200+ instructors to help maximize
                  your personal potential.
                </p>
              </div>
            </div>
            <div
              className={revealClass("flex gap-3")}
              style={{ transitionDelay: "240ms" }}
            >
              <Check className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-2 tracking-tight">
                  Anytime, Anywhere
                </h4>
                <p className="text-white/60 leading-relaxed max-w-sm">
                  Watch or listen to lessons on your computer, TV, phone, or
                  tablet.
                </p>
              </div>
            </div>
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
            <h3
              className={revealClass("font-display text-4xl md:text-5xl mb-4")}
              style={{ transitionDelay: "80ms" }}
            >
              Featured Mentors
            </h3>
            <p
              className={revealClass("text-xl text-white/60")}
              style={{ transitionDelay: "180ms" }}
            >
              Learn from pioneers and innovators in their fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className={revealClass("group cursor-pointer motion-surface")}
                style={{ transitionDelay: `${120 + index * 90}ms` }}
              >
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.28)] motion-surface group-hover:-translate-y-2 group-hover:shadow-[var(--surface-glow-strong)]">
                  <ImageWithFallback
                    src={mentor.image}
                    alt={mentor.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                      mentor.name === "Mark Herrera"
                        ? "object-[50%_18%]"
                        : mentor.name === "Ryan Herrera"
                          ? "object-[50%_30%]"
                          : mentor.name === "Marvin Herrera"
                            ? "object-[50%_18%]"
                            : mentor.name === "Arnel Polo"
                              ? "object-[50%_8%]"
                              : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <BookOpen className="w-4 h-4" />
                      {mentor.lessons} Lessons
                    </div>
                  </div>
                </div>
                <h4 className="text-xl mb-1 tracking-tight">{mentor.name}</h4>
                <p className="text-white/60">{mentor.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3
              className={revealClass("font-display text-4xl md:text-5xl mb-4")}
              style={{ transitionDelay: "80ms" }}
            >
              Explore Categories
            </h3>
            <p
              className={revealClass("text-xl text-white/60")}
              style={{ transitionDelay: "180ms" }}
            >
              Discover courses across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={revealClass("p-8 border border-white/10 rounded-2xl bg-white/[0.02] cursor-pointer group motion-surface hover:border-white/30 hover:bg-white/[0.05] hover:-translate-y-2 hover:shadow-[var(--surface-glow)]")}
                  style={{ transitionDelay: `${120 + index * 90}ms` }}
                >
                  <Icon className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors duration-300" />
                  <h4 className="text-xl mb-2 tracking-tight">
                    {category.title}
                  </h4>
                  <p className="text-white/60">{category.count} courses</p>
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
            <div
              className={revealClass("text-center")}
              style={{ transitionDelay: "80ms" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center motion-surface hover:bg-white/15 hover:-translate-y-1">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-2xl mb-4 tracking-tight">
                Expert Instruction
              </h4>
              <p className="text-white/60">
                Learn directly from industry leaders with decades of real-world
                experience
              </p>
            </div>
            <div
              className={revealClass("text-center")}
              style={{ transitionDelay: "160ms" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center motion-surface hover:bg-white/15 hover:-translate-y-1">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-2xl mb-4 tracking-tight">
                Community Access
              </h4>
              <p className="text-white/60">
                Join a thriving community of learners and receive personalized
                feedback
              </p>
            </div>
            <div
              className={revealClass("text-center")}
              style={{ transitionDelay: "240ms" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center motion-surface hover:bg-white/15 hover:-translate-y-1">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-2xl mb-4 tracking-tight">Lifetime Access</h4>
              <p className="text-white/60">
                Stream courses anywhere, anytime, and revisit lessons as many
                times as you need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3
            className={revealClass("font-display text-5xl md:text-6xl mb-6")}
            style={{ transitionDelay: "100ms" }}
          >
            Start Your Journey Today
          </h3>
          <p
            className={revealClass("text-xl text-white/70 mb-12 max-w-2xl mx-auto")}
            style={{ transitionDelay: "200ms" }}
          >
            Join thousands of learners transforming their careers with guidance
            from world-class mentors
          </p>
          <button className="px-10 py-5 bg-white text-black rounded inline-flex items-center gap-2 motion-surface hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] active:translate-y-0">
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
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
                  >
                    All Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
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
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
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
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
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
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="motion-link hover:text-white hover:-translate-y-px inline-block"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/60">
            <p>&copy; 2026 TopSecret Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
