"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Sparkles, Target, ShieldCheck, Users2, LineChart, Briefcase, Building2, Gem, Rocket, HeartHandshake } from "lucide-react";

/**
 * Henoreb Consulting – Modern Portfolio Landing Page
 * Tech: React + Tailwind + Framer Motion + Lucide icons
 * Drop this file in a Next.js 13+ app (app router) as `app/page.tsx` and it will render.
 *
 * Notes:
 * - Replace image placeholders in /public/images (e.g., hero.jpg, rita.jpg, tare.jpg, logo.svg)
 * - Colors follow the brand: Navy, Teal Green/Blue, Black, White, Gold, Grey
 * - Animations are subtle and performant, similar to top-tier portfolio sites
 */

// Utility containers
const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string; headline?: string; sub?: string }>> = ({ id, className = "", headline, sub, children }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>
    <Container>
      {(headline || sub) && (
        <div className="mb-10 flex flex-col items-start gap-3">
          {sub && (
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider text-white/80 backdrop-blur"
            >
              {sub}
            </motion.span>
          )}
          {headline && (
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            >
              {headline}
            </motion.h2>
          )}
        </div>
      )}
      {children}
    </Container>
  </section>
);

const GradientBorderCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`relative rounded-2xl p-[1px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ${className}`}
  >
    <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(at_10%_10%,#0ea5a2_0%,#0b3b66_35%,#0ea5a2_65%,#eab308_100%)] opacity-60 blur-sm" />
    <div className="relative rounded-2xl bg-slate-950/80 p-6 ring-1 ring-white/10">{children}</div>
  </motion.div>
);

// Sticky top progress bar
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-[#0ea5a2] via-[#0b3b66] to-[#eab308] z-50" />
  );
};

// NAVBAR
const NavBar: React.FC = () => (
  <div className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
    <Container className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/images/logo.svg" alt="Henoreb" width={32} height={32} />
        <span className="text-white/90 text-sm sm:text-base">Henoreb Consulting</span>
      </div>
      <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
        <Link href="#about" className="hover:text-white">About</Link>
        <Link href="#services" className="hover:text-white">Services</Link>
        <Link href="#values" className="hover:text-white">Values</Link>
        <Link href="#team" className="hover:text-white">Team</Link>
        <Link href="#contact" className="hover:text-white">Contact</Link>
      </nav>
      <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-teal-300 hover:bg-teal-500/20">
        Let’s talk <ArrowRight className="h-4 w-4" />
      </Link>
    </Container>
  </div>
);

// HERO
const Hero: React.FC = () => (
  <div className="relative overflow-hidden bg-[radial-gradient(1000px_500px_at_20%_-10%,#0ea5a2_0%,transparent_60%),radial-gradient(1000px_600px_at_120%_-10%,#0b3b66_0%,transparent_60%)]">
    <Section className="pt-20 sm:pt-24" id="home">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <Sparkles className="h-3.5 w-3.5" /> Driving excellence
            </span>
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Tailored, sustainable business solutions for Africa
            </h1>
            <p className="mb-8 max-w-xl text-white/70 text-sm sm:text-base">
              We help organisations achieve excellence by aligning talent and strategy for lasting success.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#services" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/30 transition hover:from-teal-400 hover:to-teal-300">
                Explore Services
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-white/70">
            {[
              { label: "Organisational Dev.", icon: Building2 },
              { label: "Talent Management", icon: Users2 },
              { label: "HR Optimization", icon: LineChart },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs sm:text-sm">
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute -left-10 -top-10 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-gradient-to-tr from-[#eab308]/30 to-transparent blur-2xl" />
          <Image src="/images/hero.jpg" alt="Henoreb consulting collage" width={600} height={450} className="relative mx-auto aspect-[4/3] w-full max-w-md sm:max-w-xl rounded-3xl object-cover shadow-2xl ring-1 ring-white/10" />
        </motion.div>
      </div>
    </Section>
  </div>
);


// WHY HENOREB – badges
const WhyList: React.FC = () => {
  const points = [
    "International experience & industry depth",
    "Vast network delivering exceptional value",
    "Core values drive our practices (RISE)",
    "Multi-disciplinary, sustainable solutions",
    "Client-first & compliance-led",
    "Robust, tested frameworks; co-created",
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {points.map((p, i) => (
        <motion.div key={p} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80">
          <CheckCircle2 className="h-5 w-5 text-teal-300" /> {p}
        </motion.div>
      ))}
    </div>
  );
};

// SERVICES
const services = {
  "Organisational Development": [
    "Business Advisory",
    "Corporate Strategy",
    "Organisation Design",
    "Change Management",
    "Culture",
    "Strategic Workforce Planning",
    "Recruitment",
    "Performance Management",
    "Learning & Development",
    "Career & Succession Management",
    "Competency Framework",
    "Employee Engagement & Experience",
    "Capability Assessment",
    "Talent Retention",
    "Job Evaluation",
    "Total Rewards",
  ],
  "Talent Management": [
    "Workforce Planning",
    "Recruitment & Selection",
    "Competency Frameworks",
    "Performance & Rewards",
    "Learning & Development",
  ],
  "HR Function Optimization": [
    "HR Strategy",
    "Operating Model",
    "Policies & Processes",
    "HR Maturity Assessment",
  ],
};

const ServiceCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <GradientBorderCard>
    <div className="mb-4 flex items-center gap-3">
      <div className="rounded-xl bg-teal-500/15 p-2 ring-1 ring-teal-400/20">
        <Briefcase className="h-5 w-5 text-teal-300" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="grid list-disc gap-2 pl-5 text-sm text-white/80 marker:text-teal-300/80">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </GradientBorderCard>
);

// VALUES
const ValueCard: React.FC<{ title: string; desc: string; icon: React.ElementType }> = ({ title, desc, icon: Icon }) => (
  <GradientBorderCard>
    <div className="mb-3 flex items-center gap-3">
      <div className="rounded-xl bg-indigo-500/10 p-2 ring-1 ring-indigo-400/20">
        <ShieldCheck className="hidden" />
        <Icon className="h-5 w-5 text-teal-200" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="text-white/70 text-sm">{desc}</p>
  </GradientBorderCard>
);

// TEAM
const TeamCard: React.FC<{ name: string; title: string; bio: string; img: string }> = ({ name, title, bio, img }) => (
  <GradientBorderCard>
    <div className="flex items-start gap-5">
      <img src={img} alt={name} className="h-20 w-20 rounded-2xl object-cover ring-1 ring-white/10" />
      <div>
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-teal-300 text-sm font-medium">{title}</p>
        <p className="mt-2 text-sm text-white/70">{bio}</p>
      </div>
    </div>
  </GradientBorderCard>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950/70">
    <Container className="py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <img src="/images/logo.svg" className="h-30 w-30" />
            <span className="font-semibold text-white">Henoreb Consulting</span>
          </div>
          <p className="text-sm text-white/70 max-w-xs">We co-create tailored, sustainable solutions that align talent with strategy for lasting success.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#values" className="hover:text-white">Values</a></li>
            <li><a href="#team" className="hover:text-white">Team</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@henoreb.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +234 813 446 2996</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Abuja, Nigeria</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Legal</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>© {new Date().getFullYear()} Henoreb Consulting</li>
            <li>All rights reserved</li>
          </ul>
        </div>
      </div>
    </Container>
  </footer>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <ScrollProgress />
      <NavBar />
      <Hero />

      {/* ABOUT */}
      <Section id="about" headline="About Henoreb" sub="Forward-thinking. Evolving. Client-focused.">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-white/80">
              Founded in 2024, Henoreb Consulting is a management consulting firm dedicated to empowering organisations in their pursuit of excellence and sustainable growth.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <GradientBorderCard>
                <div className="flex items-start gap-3">
                  <Target className="mt-1 h-5 w-5 text-teal-300" />
                  <div>
                    <h3 className="font-semibold">Vision</h3>
                    <p className="text-sm text-white/70">To be the preferred firm for tailored, sustainable business solutions in Africa.</p>
                  </div>
                </div>
              </GradientBorderCard>
              <GradientBorderCard>
                <div className="flex items-start gap-3">
                  <Rocket className="mt-1 h-5 w-5 text-teal-300" />
                  <div>
                    <h3 className="font-semibold">Mission</h3>
                    <p className="text-sm text-white/70">Help organisations achieve excellence by aligning talent and strategy for lasting success.</p>
                  </div>
                </div>
              </GradientBorderCard>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
              <h3 className="mb-2 font-semibold text-white">Why Henoreb</h3>
              <WhyList />
            </div>
          </div>
          <div>
            <img src="/images/about.jpg" alt="Consulting session" className="mx-auto w-full max-w-xl rounded-3xl object-cover ring-1 ring-white/10" />
          </div>
        </div>
      </Section>

      {/* VALUES */}
      <Section id="values" headline="RISE: Our Core Values" sub="The foundation of our culture">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ValueCard title="Respect" icon={HeartHandshake} desc="We value every individual and promote a culture of inclusivity." />
          <ValueCard title="Integrity" icon={ShieldCheck} desc="We conduct business with honesty and transparency." />
          <ValueCard title="Service" icon={Users2} desc="We meet client needs with dedication and professionalism." />
          <ValueCard title="Excellence" icon={Gem} desc="We strive for the highest standards in all we do." />
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" headline="Service Offerings" sub="Tailored solutions for lasting impact">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(services).map(([title, items]) => (
            <ServiceCard key={title} title={title} items={items} />
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <Section id="team" headline="Our Team" sub="Depth of expertise. Fresh ideas.">
        <div className="grid gap-6 lg:grid-cols-2">
          <TeamCard
            name="Rita Okene, ACIPM, SHRM‑SCP"
            title="Partner – Management Consulting"
            img="/images/rita.jpg"
            bio="Proven expertise delivering tailored solutions across Africa, with leadership experience at PwC, Deloitte, and Baker Tilly. B.Sc. Psychology (OAU), ACIPM, SHRM‑SCP, Certified PPA Practitioner; currently pursuing an MBA at Nexford University."
          />
          <TeamCard
            name="Tarekeyi Okene, SHRM‑CP"
            title="Partner – Human Capital Consulting"
            img="/images/tare.jpg"
            bio="Result‑driven HR professional aligning HR strategy and operations with business goals. Experience across HR strategy, skills assessment, total rewards, performance, change and organisation design. B.Sc. Sociology & Anthropology (Uniben), SHRM‑CP."
          />
        </div>
      </Section>

      {/* CTA STRIP */}
      <div className="relative overflow-hidden">
        <Section className="py-16">
          <div className="relative rounded-3xl border border-white/10 bg-[radial-gradient(1200px_400px_at_-20%_-40%,rgba(14,165,162,0.25),transparent_60%),radial-gradient(1000px_400px_at_120%_140%,rgba(234,179,8,0.2),transparent_60%)] p-8 sm:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">Ready to drive excellence?</h3>
                <p className="text-white/70">Let’s co‑create the right solution for your organisation.</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-500/30">
                Start a conversation <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Section>
      </div>

      {/* CONTACT */}
      <Section id="contact" headline="Get in touch" sub="We’d love to hear from you">
        <div className="grid gap-8 lg:grid-cols-2">
          <GradientBorderCard>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Name</label>
                <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40" placeholder="Your full name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Email</label>
                <input type="email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40" placeholder="you@company.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Message</label>
                <textarea rows={5} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40" placeholder="How can we help?" />
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0ea5a2] to-[#14b8a6] px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-500/30">
                Send Message
              </button>
            </form>
          </GradientBorderCard>
          <div className="grid gap-4">
            <GradientBorderCard>
              <div className="flex items-center gap-3 text-white/80"><Mail className="h-5 w-5 text-teal-300" /> hello@henoreb.com</div>
            </GradientBorderCard>
            <GradientBorderCard>
              <div className="flex items-center gap-3 text-white/80"><Phone className="h-5 w-5 text-teal-300" /> +234 813 446 2996</div>
            </GradientBorderCard>
            <GradientBorderCard>
              <div className="flex items-center gap-3 text-white/80"><MapPin className="h-5 w-5 text-teal-300" /> Abuja, Nigeria</div>
            </GradientBorderCard>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

// Tailwind design hints (for reference):
// - Background: slate-950 base with brand gradients
// - Brand palette example hex: Navy #0b3b66, Teal #0ea5a2 / #14b8a6, Gold #eab308, Grey #94a3b8
// - Replace images in /public/images and logo.svg for production
