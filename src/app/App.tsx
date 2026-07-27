import { useState, useEffect, useMemo, useRef } from "react";
import type { ReactNode, FormEvent } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import RahmaPhoto from "../assets/Rahma.png";
import aboutImage from "../assets/about.jpg";
import academicImage from "../assets/academic.jpg";
import desainImage from "../assets/desain.jpeg";
import mtcnaImage from "../assets/mtcna.png";
import excelImage from "../assets/excel.png";
import aiImage from "../assets/ai.png";
import tamunifyImage from "../assets/tamunify.png";
import portfolioImage from "../assets/portfolio.png";
import lizstockImage from "../assets/lizstock.png";
import mathImage from "../assets/math.png";
import desain1Image from "../assets/desain1.png";
import desain5Image from "../assets/desain5.png";
import aprilmopImage from "../assets/aprilmop.png";
import iftarImage from "../assets/iftar.png";
import bannerImage from "../assets/banner.png";
import twibbonImage from "../assets/twibbon.png";
import cafeImage from "../assets/cafe.png";
import clusterImage from "../assets/cluster.png";
import learningdocImage from "../assets/learningdoc.jpeg";
import mrexcelImage from "../assets/mrexcel.png";
import { SiGoogledrive } from "react-icons/si";
import { BookOpen } from "lucide-react";
import {
  Menu, X, ExternalLink, Github, Linkedin, Instagram, Mail,
  Download, ArrowRight, Briefcase, GraduationCap, Send, Eye, Award,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

const SKILLS_DATA = [
  {
    type: "Hard Skills",
    category: "Front-End Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    type: "Hard Skills",
    category: "UI/UX Design",
    skills: [
      "Figma",
      "Wireframing",
      "Prototype",
      "Design System",
    ],
  },
  {
    type: "Hard Skills",
    category: "Graphic Design",
    skills: [
      "Photoshop",
      "Illustrator",
      "Canva",
      "CorelDRAW",
    ],
  },
  {
    type: "Hard Skills",
    category: "Learning Design",
    skills: [
      "Articulate Storyline",
      "Canva",
      "Moodle",
      "H5P",
    ],
  },
  {
    type: "Soft Skills",
    category: "Professional Skills",
    skills: [
      "Communication",
      "Teamwork",
      "Leadership",
      "Problem Solving",
      "Time Management",
      "Adaptability",
    ],
  },
];

const CATEGORY_BADGE: Record<string, string> = {
  "Web Development": "WEB",
  "UI/UX Design": "UI/UX",
  "Graphic Design": "DESIGN",
  "Learning Design & Development": "LEARNING DEV",
  "Microsoft Excel": "EXCEL"
};

const PORTFOLIO_ITEMS = [
   {
    id: 1,
    title: "Portfolio Web",
    category: ["Web Development", "UI/UX Design"],
    description: "Responsive portfolio site with cinematic animations.",
    tech: ["Figma", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui", "Framer Motion"],
    image: portfolioImage,
    orientation: "landscape",
    demo: "#",
    github: "https://github.com/Rahmaulidaaaa/Portfolio-Rahma-Maulida",
  },
   {
    id: 2,
    title: "Tamunify Web",
    category: ["Web Development", "UI/UX Design"],
    description: "Digital guest management system for visitor registration",
    tech: ["Figma", "Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Vite"],
    image: tamunifyImage,
    orientation: "landscape",
    demo: "https://tamunify-web-production.up.railway.app/",
    github: "https://github.com/Rahmaulidaaaa/Tamunify-web",
  },
     {
    id: 3,
    title: "Lizstock Web",
    category: ["Web Development", "UI/UX Design"],
    description: "Stock education platform with signals, and market analysis.",
    tech: ["Figma", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui", "Framer Motion"],
    image: lizstockImage,
    orientation: "landscape",
    demo: "https://lizstock-id.vercel.app/",
    github: "https://github.com/Rahmaulidaaaa/Lizstock.id",
  },
     {
    id: 4,
    title: "Math Fun Game Mobile App",
    category: ["Learning Design & Development", "UI/UX Design"],
    description: "Interactive math learning game built with Unity.",
    tech: ["Canva", "Unity"],
    image: mathImage,
    orientation: "landscape",
    demo: "https://drive.google.com/file/d/1Mm2mWzQMCxMVQuImehEkZhK6Pl-MRL38/view?usp=sharing",
    drive: "https://drive.google.com/drive/folders/1zqzkSLH-Sf00orqv8AY5Pc0yptJtaaep",
  },  
  {
    id: 5,
    title: "Cafe Web (Personal Project)",
    category: ["Web Development", "UI/UX Design"],
    description: "A responsive café website with an elegant user experience.",
    tech: ["Figma", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui", "Framer Motion"],
    image: cafeImage,
    orientation: "landscape",
    demo: "https://cafe-six-bay.vercel.app/",
    github: "https://github.com/Rahmaulidaaaa/Cafe",
  },  
 {
    id: 6,
    title: "Cluster Web (Personal Project)",
    category: ["Web Development", "UI/UX Design"],
    description: "Designed Instagram content with engaging and consistent branding.",
    tech: ["Figma", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui", "Framer Motion"],
    image: clusterImage,
    orientation: "landscape",
    demo: "https://cluster-ruddy.vercel.app/",
    github: "https://github.com/Rahmaulidaaaa/Cluster",
  },  
    {
    id: 7,
    title: "PERSONAL LEARNING DESIGN PROJECT (CASE STUDY)",
    category: ["Learning Design & Development"],
    description: "Case study designing a 12-week onboarding program.",
    tech: ["Microsoft Word, Power Point, Canva"],
    image: learningdocImage,
    orientation: "landscape",
    demo: "https://onboarding-quiz-seven.vercel.app/",
    drive: "https://drive.google.com/file/d/11M6q8pNEsmqnxntqqfFmM4PUEpdgM6rD/view?usp=sharing",
  }, 
  {
    id: 8,
    title: "Microsoft Excel (Short Class Project)",
    category: ["Microsoft Excel"],
    description: "Case study designing a 12-week onboarding program.",
    tech: ["Microsoft Word, Power Point, Canva"],
    image: mrexcelImage,
    orientation: "landscape",
    demo: "https://docs.google.com/spreadsheets/d/1lnPUHTrkq8ABZnDb29t8pCN_cJi60TLx/edit?usp=sharing&ouid=111851313324926450283&rtpof=true&sd=true",
    drive: "https://docs.google.com/spreadsheets/d/1lnPUHTrkq8ABZnDb29t8pCN_cJi60TLx/edit?usp=sharing&ouid=111851313324926450283&rtpof=true&sd=true",
  },  

{
    id: 9,
    title: "Instagram Social Media Design",
    category: ["Graphic Design"],
    description: "Designed Instagram content with engaging and consistent branding.",
    tech: ["Canva"],
    image: desain1Image, 
    orientation: "portrait",
    demo: "#",
    drive: "#",
  },  
           {
    id: 10,
    title: "Instagram Social Media Promotion Design",
    category: ["Graphic Design"],
    description: "Designed promotional posts for products and special offers",
    tech: ["Canva"],
    image: aprilmopImage,
    orientation: "portrait",
    demo: "#",
    drive: "#",
  },  
         {
    id: 11,
    title: "Instagram Social Media Menu Design",
    category: ["Graphic Design"],
    description: "Designed menu posts showcasing food with appealing visuals.",
    tech: ["Canva"],
    image: iftarImage,
    orientation: "portrait",
    demo: "#",
    drive: "#",
  },  
         {
    id: 12,
    title: "Banner Design",
    category: ["Graphic Design"],
    description: "Created attractive banners with clean and engaging layouts.",
    tech: ["Canva"],
    image: bannerImage,
    orientation: "portrait",
    demo: "#",
    drive: "#",
  },       
];

const CATEGORIES = ["All", "Web Development", "UI/UX Design", "Graphic Design", "Learning Design & Development", "Microsoft Excel"];

const EXPERIENCE_DATA = [
  {
    title: "Front-End Developer",
    company: "Lizstock.id",
    duration: "6 Months",
    period: "Jan - Juni 2026",
    description: "Built a responsive front-end website for Lizstock with a modern and user-friendly interface.",
    icon: "",
  },
    {
    title: "Graphic Designer",
    company: "Radja Seafood Purwakarta",
    duration: "3 Year",
    period: "Okt 2022 – April 2026",
    description: "Designed promotional and product menu content for social media with engaging visuals, clear information, and consistent branding.",
    icon: "",
  },
  {
    title: "UI/UX Designer & Front-End Developer",
    company: "PT Pupuk Kujang Cikampek",
    duration: "6 Months",
    period: "Feb - Juni 2025",
    description: "Designed responsive and user-friendly interfaces, integrated frontend with APIs, and collaborated in application development and testing to ensure system quality.",
    icon: "",
  },
  {
    title: "Staff Kominfo",
    company: "Himpunan Mahasiswa PSTI",
    duration: "1 Years",
    period: "2023 - 2024",
    description: "Designed publication content, managed the organization's social media, and supported documentation and information dissemination to enhance communication and event promotion.",
    icon: "",
  },
  {
    title: "Graphic Designer Trainee",
    company: "Kementerian Ketenagakerjaan Republik Indonesia",
    duration: "1 Months",
    period: "Feb - Mar 2022",
    description: "Created visual designs for digital and print media, supported promotional and branding materials, and collaborated to deliver designs that met project requirements.",
  },
  {
    title: "Staff Administration",
    company: "Universitas Pendidikan Indonesia",
    duration: "1 Moths",
    period: "Feb 2020",
    description: "Managed administrative workflows and designed digital assets for departmental communications, events, and academic publications.",
    icon: "",
  },
];

const CERTIFICATES_DATA = [
  {
    title: "Desain Grafis Madya",
    issuer: "Kementerian Ketenagakerjaan Republic Indonesia",
    year: "2022",
    image: desainImage,
  },
  {
    title: "MTCNA (MikroTik Certified Network Associate)",
    issuer: "MikroTik",
    year: "2024",
    image: mtcnaImage,
  },
  {
    title: "Data Visual Using Excel",
    issuer: "MySkill",
    year: "2026",
    image: excelImage,
  },
  {
    title: "AI and Automation with n8n",
    issuer: "MySkill",
    year: "2026",
    image: aiImage,
  },
];

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionTitle({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="text-center mb-16"
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 text-[#EC4899] text-sm font-semibold tracking-widest uppercase mb-4"
      >
        <span className="w-6 h-px bg-[#EC4899]" />
        {label}
        <span className="w-6 h-px bg-[#EC4899]" />
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SkillCard({ cat, delay }: { cat: (typeof SKILLS_DATA)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(236,72,153,0.08)" }}
      className="p-6 rounded-2xl bg-[#1E293B]/60 border border-white/5 hover:border-[#EC4899]/20 backdrop-blur-sm transition-all duration-300 group"
    >
      <div className="mb-6">
  <span className="inline-flex px-3 py-1 rounded-full bg-[#EC4899]/10 text-[#EC4899] text-xs font-semibold uppercase tracking-wider">
    {cat.type}
  </span>

  <h3 className="text-white font-bold text-lg mt-3">
    {cat.category}
  </h3>
</div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: delay + si * 0.07 + 0.3 }}
            className="px-3 py-1.5 rounded-full bg-[#0F172A] border border-white/8 text-[#94A3B8] text-sm font-medium hover:border-[#EC4899]/30 hover:text-[#EC4899] transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function ExperienceItem({ exp, index }: { exp: (typeof EXPERIENCE_DATA)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-20 group"
    >
      {/* Node */}
      <div className="absolute left-5 top-8 w-6 h-6 rounded-full border-2 border-[#EC4899] bg-[#0F172A] flex items-center justify-center z-10 -translate-x-1/2 group-hover:bg-[#EC4899] transition-colors duration-300">
        <div className="w-2 h-2 rounded-full bg-[#EC4899] group-hover:bg-[#0F172A] transition-colors duration-300" />
      </div>

      <div className="p-6 rounded-2xl bg-[#1E293B]/60 border border-white/5 hover:border-[#EC4899]/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(236,72,153,0.08)]">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-bold text-xl">{exp.title}</h3>
            <p className="text-[#EC4899] font-medium mt-0.5">{exp.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="px-3 py-1 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#EC4899] text-xs font-semibold">
              {exp.duration}
            </span>
            <span className="text-[#94A3B8] text-xs">{exp.period}</span>
          </div>
        </div>
        <p className="text-[#94A3B8] leading-relaxed">{exp.description}</p>
      </div>
    </motion.div>
  );
}

function CertCard({ cert, index }: { cert: (typeof CERTIFICATES_DATA)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(236,72,153,0.1)" }}
      className="group relative rounded-2xl overflow-hidden bg-[#1E293B]/60 border border-white/5 hover:border-[#EC4899]/20 transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden bg-[#0F172A]">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent" />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#EC4899]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white rounded-full font-semibold text-sm shadow-xl">
          <Eye size={16} /> View Certificate
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold mb-1">{cert.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[#EC4899] text-sm">{cert.issuer}</span>
          <span className="text-[#94A3B8] text-xs">{cert.year}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [skillFilter, setSkillFilter] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: `${(i * 19 + 3) % 97}%`,
        top: `${(i * 29 + 7) % 95}%`,
        duration: 3 + (i % 5),
        delay: (i * 0.35) % 4,
      })),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const filteredPortfolio = useMemo(
  () =>
    PORTFOLIO_ITEMS.filter(
      (item) =>
        activeFilter === "All" || item.category.includes(activeFilter)
    ),
  [activeFilter]
);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <div
      className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ── LOADING ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#0F172A] flex flex-col items-center justify-center gap-6"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="flex"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
            >
              {"Rahma Maulida".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="text-3xl sm:text-4xl font-bold text-white"
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <span className="text-[#EC4899] text-xs tracking-[4px] font-semibold uppercase">
              Information System & Technology Education
            </span>
            <div className="w-52 h-[2px] bg-[#1E293B] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#EC4899] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SCROLL PROGRESS ─────────────────────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#EC4899] origin-left z-50"
        style={{
          scaleX: scrollYProgress,
          boxShadow: "0 0 12px #EC4899, 0 0 24px rgba(236,72,153,0.4)",
        }}
      />

      {/* ── NAVBAR ──────────────────────────────────────────────────────────── */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0F172A]/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-[#EC4899]">R</span>ahma
            <span className="text-[#EC4899]">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-[#94A3B8] hover:text-[#EC4899] transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#EC4899] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(236,72,153,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-[#EC4899] text-white text-sm font-bold rounded-full transition-all"
            >
              Hire Me
            </motion.button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#0F172A]/98 backdrop-blur-2xl border-b border-white/5"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="text-left px-3 py-3 text-[#94A3B8] hover:text-[#EC4899] hover:bg-white/3 rounded-xl transition-all font-medium"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("contact")}
                  className="mt-3 px-4 py-3 bg-[#EC4899] text-white font-bold rounded-xl text-sm"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Ambient BG */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-[#EC4899]/[0.04] blur-[160px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-[#EC4899]/[0.03] blur-[120px]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-1 h-1 rounded-full bg-[#EC4899]"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -25, 0], opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EC4899]/20 bg-[#EC4899]/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse" />
              <span className="text-[#EC4899] text-sm font-medium">Available for Work</span>
            </motion.div>

            <motion.h1
  variants={fadeUp}
  className="text-5xl sm:text-6xl xl:text-6xl font-bold leading-tight mb-1"
>
  Hi, I'm{" "}
  <span className="text-[#EC4899] whitespace-nowrap">
    Rahma Maulida
  </span>
</motion.h1>

            <motion.p
  variants={fadeUp}
  className="text-white text-xl font-semibold mb-1"
>
  Information Systems & Technology Education
</motion.p>

           <motion.p
  variants={fadeUp}
  className="text-[#94A3B8] text-base leading-8 mb-10 max -w-2xl"
>
  <span className="block">
    Passionate about Information Technology and Design.
    <br />
    Interested in Front-End Development, UI/UX Design,
    <br />
    Graphic Designer and Learning Design & Development.
  </span>
</motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              <motion.button
                onClick={() => scrollTo("portfolio")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(236,72,153,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#EC4899] text-[#ffffff] font-bold rounded-full inline-flex items-center gap-2 shadow-[0_0_30px_rgba(236,72,153,0.25)] transition-all"
              >
                Download CV <Download size={18} />
              </motion.button>
            </motion.div>

           
          </motion.div>

          {/* Profile photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-center relative min-h-[360px]"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 2.8 }}
          >
            {/* Orbit rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-[380px] h-[380px] border border-[#EC4899]/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-[440px] h-[440px] border border-dashed border-[#EC4899]/[0.06] rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Floating badge chips */}
            {[
              { emoji: "", label: "Front End Developer", top: "8%", left: "-6%" },
              { emoji: "", label: "UI/UX Designer", top: "20%", right: "-8%" },
              { emoji: "", label: "Graphic Designer", bottom: "20%", left: "-6%" },
              { emoji: "", label: "Learning Designert", bottom: "8%", right: "-4%" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                className="absolute z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1E293B]/90 backdrop-blur-md border border-white/10 shadow-xl"
                style={{
                  top: badge.top,
                  bottom: badge.bottom,
                  left: badge.left,
                  right: badge.right,
                }}
                animate={{ y: [0, i % 2 === 0 ? -12 : 10, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xl">{badge.emoji}</span>
                <span className="text-xs font-semibold text-[#94A3B8]">{badge.label}</span>
              </motion.div>
            ))}

            {/* Photo */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 self-center"
            >
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#EC4899]/25 bg-[#1E293B] shadow-[0_0_80px_rgba(236,72,153,0.15)]">
                <img
              src={RahmaPhoto}
              alt="Rahma Maulida"
              className="w-full h-full object-cover"
              />
              </div>
              <div className="absolute inset-0 rounded-full bg-[#EC4899]/5 blur-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 relative">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#EC4899]/[0.03] rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="About Me"
            title="Profile Overview"
            subtitle={""}
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio */}
            <Reveal>
              <div className="space-y-6 max-w-xl">
  <p className="text-[#94A3B8] text-base leading-8 text-justify">
    I'm Rahma Maulida , a fresh graduate in Information Systems and Technology Education with a GPA of 3.68. I have a strong interest in Front-End Development, UI/UX Design, Graphic Design, and Learning Design & Development. I enjoy creating digital products, user interfaces, and learning media that are functional, visually appealing, and user-centered.
  </p>

  <p className="text-[#94A3B8] text-base leading-8 text-justify">
   Throughout my academic journey, organizational activities, internships, work experience, and personal projects, I have developed skills in designing intuitive user interfaces, building responsive web applications, and creating engaging visual and learning content. I am a responsible, detail-oriented individual who works well both independently and collaboratively, and I am always eager to learn, grow, and contribute to meaningful projects.
  </p>

              

                <motion.button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 text-[#EC4899] font-semibold group"
                  whileHover={{ x: 4 }}
                >
                  
                </motion.button>
              </div>
            </Reveal>

            {/* Visual */}
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#1E293B]">
                  <img
                      src={aboutImage}
                      alt="About Me"
                    className="w-full h-[420px] object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent rounded-2xl pointer-events-none" />
                </div>

                
              </div>
            </Reveal>
          </div>
        </div>
      </section>


{/* ── EDUCATION ───────────────────────────────────────────────────────── */}
<section id="education" className="py-28 relative">
  <div className="absolute right-0 top-0 w-96 h-96 bg-[#EC4899]/[0.03] rounded-full blur-[120px]" />

  <div className="max-w-7xl mx-auto px-6">
    <SectionTitle
      label="Education"
      title="Academic Background"
      subtitle=""
    />

    <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">

        {/* Image */}
      <Reveal delay={0.2}>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#1E293B]">

            <img
  src={academicImage}
  alt="academic"
  className="w-full h-[420px] object-cover opacity-75"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* Education Card */}
      <Reveal>
        <div className="p-6 rounded-2xl bg-[#1E293B]/60 border border-white/5 backdrop-blur-sm">

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#EC4899]/10 border border-[#EC4899]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={24} className="text-[#EC4899]" />
            </div>

            <div>
              <span className="text-[11px] text-[#EC4899] font-bold tracking-widest uppercase">
                Education
              </span>

              <h3 className="text-white text-xl font-bold mt-2">
                S1 Information Systems & Technology Education
              </h3>

              <p className="text-[#CBD5E1] text-base mt-2">
                Universitas Pendidikan Indonesia
              </p>

              <div className="mt-6 space-y-3">

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#94A3B8]">
                    Period
                  </span>
                  <span className="text-[#EC4899] font-medium">
                    Sept 2022 – May 2026
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#94A3B8]">
                    GPA
                  </span>
                  <span className="text-[#EC4899] font-medium">
                    3.68 / 4.00
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">
                    Status
                  </span>
                  <span className="text-[#EC4899] font-medium">
                    Fresh Graduate
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </Reveal>

    </div>
  </div>
</section>


      {/* ── SKILLS ──────────────────────────────────────────────────────────── */}
<section id="skills" className="py-28 relative">
  <div className="absolute left-0 top-1/2 w-72 h-72 bg-[#EC4899]/[0.04] rounded-full blur-[100px]" />

  <div className="max-w-7xl mx-auto px-6">

    <SectionTitle
      label="Skills"
      title="Soft Skills & Hard Skills"
      subtitle=""
    />

    {/* Filter */}
    <div className="flex justify-center flex-wrap gap-4 mb-12">
      {["All", "Hard Skills", "Soft Skills"].map((filter) => (
        <button
          key={filter}
          onClick={() => setSkillFilter(filter)}
          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
            skillFilter === filter
              ? "bg-[#EC4899] text-white shadow-lg"
              : "bg-[#1E293B] text-[#94A3B8] border border-white/10 hover:border-[#EC4899]/50 hover:text-white"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {SKILLS_DATA.filter(
        (item) =>
          skillFilter === "All" ||
          item.type === skillFilter
      ).map((cat, i) => (
        <SkillCard
          key={cat.category}
          cat={cat}
          delay={i * 0.15}
        />
      ))}
    </div>

  </div>
</section>

      {/* ── PROJECTS ───────────────────────────────────────────────────────── */}
      <section id="projects" className="py-28 relative">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#EC4899]/[0.03] rounded-full blur-[130px]" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Projects"
            title="Selected Work"
            subtitle=""
          />

          {/* Filter */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeFilter === cat
                      ? "bg-[#EC4899] text-white shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                      : "bg-[#1E293B] text-[#94A3B8] border border-white/5 hover:border-[#EC4899]/20 hover:text-white"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(236,72,153,0.1)" }}
                  className="group rounded-2xl bg-[#1E293B]/60 border border-white/5 hover:border-[#EC4899]/20 overflow-hidden backdrop-blur-sm transition-all duration-300"
                >
                  {/* Image */}
            <div
  className={`relative overflow-hidden bg-[#0F172A] ${
    item.orientation === "portrait"
      ? "h-[420px]"
      : "h-48"
  }`}
>
  <img
    src={item.image}
    alt={item.title}
    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
      item.orientation === "portrait"
        ? "object-contain"
        : "object-cover"
    }`}
  />
                    
<div className="absolute top-3 left-3 z-10 flex gap-2">
  {item.category.map((cat) => (
    <span
      key={cat}
      className="rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white uppercase"
    >
      {CATEGORY_BADGE[cat]}
    </span>
  ))}
</div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#EC4899] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 line-clamp-2">{item.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#0F172A] text-[#94A3B8] text-[10px] border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
  <motion.a
    href={item.demo}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#EC4899] text-white text-xs font-bold rounded-lg hover:bg-[#DB2777] transition-colors"
  >
    <Eye size={13} /> Live Demo
  </motion.a>

  {item.github && (
    <motion.a
      href={item.github}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center px-3 py-2 bg-[#0F172A] border border-white/10 text-[#94A3B8] text-xs rounded-lg hover:text-white hover:border-white/20 transition-all"
    >
      <Github size={14} />
    </motion.a>
  )}

  {item.drive && (
    <motion.a
      href={item.drive}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center px-3 py-2 bg-[#0F172A] border border-white/10 text-[#94A3B8] text-xs rounded-lg hover:text-white hover:border-white/20 transition-all"
    >
      <SiGoogledrive size={14} />
    </motion.a>
  )}
</div>                        </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────────────────────────── */}
      <section id="experience" className="py-28 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EC4899]/[0.03] rounded-full blur-[130px]" />
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle
            label="Experience"
            title="My Journey"
            subtitle=""
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#EC4899] via-[#EC4899]/30 to-transparent" />

            <div className="space-y-8">
              {EXPERIENCE_DATA.map((exp, i) => (
                <ExperienceItem key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ────────────────────────────────────────────────────── */}
      <section id="certificates" className="py-28 relative">
        <div className="absolute right-0 top-0 w-80 h-80 bg-[#EC4899]/[0.04] rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Certificates"
            title="Continuous Learning"
            subtitle=""
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES_DATA.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 relative">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#EC4899]/[0.04] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="Contact"
            title={"Let's Work Together"}
            subtitle={""}
          />

          <div className="max-w-xl mx-auto mt-10">
            {/* Info */}
            <Reveal className="lg:col-span-2 max-w-2xl mx-auto">
              <div className="space-y-5">
                <p className="text-[#94A3B8] leading-relaxed text-center">
                  {""}
                </p>

                {[
                  {
                    Icon: Mail,
                    label: "Email",
                    value: "rahmaulidaaaa@gmail.com",
                    href: "rahmaaulidaaaa@gmail.com",
                  },
                  { Icon: Linkedin, label: "LinkedIn", value: "Rahma Maulida", href: "https://www.linkedin.com/in/rahma-maulida-83742a413/" },
                  { Icon: Github, label: "GitHub", value: "Rahma Maulida", href: "https://github.com/Rahmaulidaaaa" },
                  { Icon: Instagram, label: "Instagram", value: "@rhmlda_", href: "https://www.instagram.com/rhmlda_" },
                ].map((contact, i) => (
                  <motion.a
                    key={i}
                    href={contact.href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#1E293B]/60 border border-white/5 hover:border-[#EC4899]/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EC4899]/10 border border-[#EC4899]/20 flex items-center justify-center flex-shrink-0">
                      <contact.Icon size={18} className="text-[#EC4899]" />
                    </div>
                    <div>
                      <div className="text-[#94A3B8] text-xs">{contact.label}</div>
                      <div className="text-white text-sm font-medium group-hover:text-[#EC4899] transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xl font-bold">
              <span className="text-[#EC4899]">R</span>ahma<span className="text-[#EC4899]">.</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-[#94A3B8] hover:text-[#EC4899] text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: "https://github.com/Rahmaulidaaaa" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/rahma-maulida-83742a413/" },
                { Icon: Instagram, href: "https://www.instagram.com/rhmlda_" },
                { Icon: Mail, href: "mailto:rahma.maulida@email.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-xl bg-[#1E293B] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#EC4899] hover:border-[#EC4899]/20 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center text-[#94A3B8] text-sm">
            © 2026 Rahma Maulida.
          </div>
        </div>
      </footer>
    </div>
  );
}
