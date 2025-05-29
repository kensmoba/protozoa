"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// Definisikan tipe untuk halaman navigasi dan kategori proyek
type Page = "about" | "resume" | "portfolio" | "blog" | "contact";
type ProjectCategory =
  | "all"
  | "web design"
  | "applications"
  | "web development";

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PortfolioPage() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [activePage, setActivePage] = useState<Page>("about");
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>("all");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => setIsSidebarActive(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const projects = [
    {
      title: "Kiky Laundry Web",
      category: "web development",
      img: "/assets/images/project-1.jpg",
    },
    {
      title: "KidCare",
      category: "applications",
      img: "/assets/images/project-2.png",
    },
    {
      title: "Space Global",
      category: "web design",
      img: "/assets/images/project-3.jpg",
    },
  ];

  const blogPosts = [
    {
      title: "Bangkit Academy 2024 Batch 2",
      category: "Certificate",
      date: "Jan 10, 2025",
      img: "/assets/images/BANGKIT.jpg",
      text: "Bangkit, specializing in Mobile Development.",
    },
    {
      title: "DBS Foundation Coding Camp",
      category: "Certificate",
      date: "Sep 27, 2024",
      img: "/assets/images/DBS.jpg",
      text: "Front-End Web Developer.",
    },
    {
      title: "IBM SkillsBuild",
      category: "Certificate",
      date: "May 21, 2025",
      img: "/assets/images/IBM.jpg",
      text: "Code Generation and Optimization Using IBM Granite.",
    },
    {
      title: "Studi Independen Angkatan 7",
      category: "Certificate",
      date: "Des, 2024",
      img: "/assets/images/KM.jpg",
      text: "Kepesertaan Pelaksana Kampus Merdeka.",
    },
    {
      title: "Google Developer Student Clubs",
      category: "Certificate",
      date: "May 10, 2024",
      img: "/assets/images/GDG.jpg",
      text: "Participant of The Future of AI in Web Development.",
    },
    {
      title: "Blended Learning",
      category: "Certificate",
      date: "Sep 29, 2021",
      img: "/assets/images/BLEN.jpg",
      text: "ISB-Cara Belajar Seru Blended Learning.",
    },
  ];

  const toggleSidebar = () => setIsSidebarActive(!isSidebarActive);

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filterProjects = (category: ProjectCategory) =>
    setSelectedFilter(category);

  const handleFormInput = (e: React.FormEvent<HTMLFormElement>) =>
    setFormValid(e.currentTarget.checkValidity());

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* Font moved to _document.js */}
      </Head>
      <div className="min-h-screen bg-[#121212] text-white font-inter">
        <main className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-6 lg:p-10 max-w-[1400px] mx-auto">
          {/* Sidebar */}
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`w-full lg:w-[360px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 transition-all duration-500 ${
              isSidebarActive ? "max-h-[600px]" : "max-h-[120px] lg:max-h-none"
            } overflow-hidden lg:sticky lg:top-10 shadow-2xl`}
          >
            <div className="flex items-center gap-5 relative">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                className="w-24 h-24 lg:w-36 lg:h-36 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src="/assets/images/my-avatar.png"
                  alt="Kenny Josiah Silaen"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                  Kenny Josiah Silaen
                </h1>
                <p className="text-sm text-[#FFD700] bg-[#2A2A2A] w-fit px-3 py-1 rounded-lg mt-2">
                  202243500644
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleSidebar}
                className="absolute top-[-20px] right-[-20px] lg:top-[-30px] lg:right-[-30px] bg-gradient-to-br from-[#FFD700] to-[#D4A017] text-[#121212] p-3 rounded-2xl shadow-lg transition-all duration-300 lg:hidden"
              >
                <span className="text-sm">↓</span>
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isSidebarActive ? 1 : 0,
                height: isSidebarActive ? "auto" : 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-6 lg:opacity-100 lg:h-auto"
            >
              <div className="w-full h-[1px] bg-[#2A2A2A] my-6"></div>
              <ul className="grid gap-3">
                {[
                  {
                    icon: "📧",
                    label: "Email",
                    value: "kennyjosiahsilaen@gmail.com",
                    href: "mailto:kennyjosiahsilaen@gmail.com",
                  },
                  {
                    icon: "📱",
                    label: "WhatsApp",
                    value: "081280321877",
                    href: "https://wa.me/6281280321877",
                  },
                  { icon: "🎂", label: "Birthday", value: "29 July, 2004" },
                  {
                    icon: "📍",
                    label: "Location",
                    value: "Jakarta, Indonesia",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 8, backgroundColor: "#2A2A2A" }}
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#D4A017] rounded-lg flex items-center justify-center text-[#121212] shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase text-[#A0A0A0] font-semibold">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors duration-200"
                          style={{ overflowWrap: "break-word" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
              <div className="w-full h-[3px] bg-[#2A2A2A] my-2"></div>
              <ul className="flex gap-7 justify-center mt-6">
                {[
                  {
                    href: "https://www.facebook.com/josiahkenny.silaen/",
                    icon: <FaFacebookF />,
                  },
                  {
                    href: "https://www.linkedin.com/in/kenny-josiah-silaen/",
                    icon: <FaLinkedinIn />,
                  },
                  {
                    href: "https://www.instagram.com/josiah.crcn/",
                    icon: <FaInstagram />,
                  },
                ].map((social, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ y: -5, scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#A0A0A0] hover:text-[#FFD700] text-xl transition-colors duration-200"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="h-10"></div> {/* Spacer untuk mengangkat logo */}
            </motion.div>
          </motion.aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Navbar */}
            <motion.nav
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full bg-[#1A1A1A]/80 backdrop-blur-lg border border-[#2A2A2A] rounded-2xl shadow-xl mb-6 sticky top-0 z-10"
            >
              <ul className="flex flex-wrap justify-center gap-3 p-3">
                {["About", "Resume", "Portfolio", "Blog", "Contact"].map(
                  (page) => (
                    <motion.li
                      key={page}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() =>
                          handleNavClick(page.toLowerCase() as Page)
                        }
                        className={`text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300 ${
                          activePage === page.toLowerCase()
                            ? "text-[#FFD700] bg-[#2A2A2A] shadow-inner"
                            : "text-[#A0A0A0] hover:text-[#FFD700] hover:bg-[#2A2A2A]/50"
                        }`}
                      >
                        {page}
                      </button>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.nav>

            {/* About Section */}
            <AnimatePresence mode="wait">
              {activePage === "about" && (
                <motion.article
                  key="about"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 shadow-2xl"
                >
                  <header>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#FFD700] after:to-[#D4A017] after:rounded">
                      About Me
                    </h2>
                  </header>
                  <section className="mt-6 text-[#A0A0A0] text-base font-light leading-relaxed">
                    <p className="mb-4">
                      At <strong>Coding Camp</strong>, sponsored by DBS
                      Foundation, I drive innovation through Web Development,
                      creating impactful digital solutions. My focus on frontend
                      development aligns with empowering aspiring developers.
                    </p>
                    <p>
                      As part of{" "}
                      <strong>
                        Bangkit Academy&apos;s Mobile Development Cohort
                      </strong>
                      , backed by Google and Tokopedia, I hone my skills in
                      Android Studio. Studying Teknik Informatika at Universitas
                      Indraprasta PGRI, I&apos;m fueled by a passion to shape
                      the future of technology.
                    </p>
                  </section>
                  <section className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-5">
                      What I&apos;m Doing
                    </h3>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {[
                        {
                          icon: "/assets/images/icon-design.svg",
                          title: "UI/UX Designer",
                          text: "Crafting intuitive and engaging digital experiences for users.",
                        },
                        {
                          icon: "/assets/images/icon-dev.svg",
                          title: "Web Development",
                          text: "Building robust and seamless websites from structure to functionality.",
                        },
                        {
                          icon: "/assets/images/icon-app.svg",
                          title: "Mobile Apps",
                          text: "Developing functional Android applications with a focus on performance.",
                        },
                        {
                          icon: "/assets/images/icon-photo.svg",
                          title: "Photography",
                          text: "Capturing moments with creative and engaging compositions.",
                        },
                      ].map((service, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          whileHover={{
                            y: -8,
                            scale: 1.03,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                          }}
                          className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-5 rounded-2xl shadow-lg flex flex-col items-center lg:items-start gap-4"
                        >
                          <Image
                            src={service.icon}
                            alt={`${service.title} icon`}
                            width={48}
                            height={48}
                          />
                          <div className="text-center lg:text-left">
                            <h4 className="text-lg font-semibold text-white mb-2">
                              {service.title}
                            </h4>
                            <p className="text-sm text-[#A0A0A0]">
                              {service.text}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </section>
                </motion.article>
              )}
            </AnimatePresence>

            {/* Resume Section */}
            <AnimatePresence mode="wait">
              {activePage === "resume" && (
                <motion.article
                  key="resume"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 shadow-2xl"
                >
                  <header>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#FFD700] after:to-[#D4A017] after:rounded">
                      Resume
                    </h2>
                  </header>
                  <section className="mt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#D4A017] rounded-lg flex items-center justify-center text-[#121212] shadow-md"
                      >
                        📚
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">
                        Education
                      </h3>
                    </div>
                    <ol className="ml-12 relative">
                      <motion.li
                        whileHover={{ x: 5 }}
                        className="mb-4 relative before:content-[''] before:absolute before:top-0 before:left-[-24px] before:w-[1px] before:h-full before:bg-[#2A2A2A] after:content-[''] after:absolute after:top-1 after:left-[-27px] after:w-2 after:h-2 after:bg-gradient-to-r after:from-[#FFD700] after:to-[#D4A017] after:rounded-full after:shadow-[0_0_0_4px_#2A2A2A]"
                      >
                        <h4 className="text-lg font-semibold text-white">
                          Universitas Indraprasta PGRI
                        </h4>
                        <span className="text-[#FFD700] text-sm">
                          Aug 2022 — Present
                        </span>
                        <p className="text-sm text-[#A0A0A0] font-light mt-2">
                          Nemo enims ipsam voluptatem, blanditiis praesentium
                          voluptum delenit atque corrupti, quos dolores et quas
                          molestias exceptur.
                        </p>
                      </motion.li>
                    </ol>
                  </section>
                  <section className="mt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#D4A017] rounded-lg flex items-center justify-center text-[#121212] shadow-md"
                      >
                        📚
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">
                        Non-Formal Education
                      </h3>
                    </div>
                    <ol className="ml-12 relative">
                      {[
                        {
                          title:
                            "Graduate Front-End Web Developer class of DBS Foundation",
                          date: "Jun 2024 — Sept 2024",
                        },
                        {
                          title: "Member of Google Developer Group",
                          date: "May 2024 — Apr 2025",
                        },
                        {
                          title:
                            "Graduate of Bangkit Academy 2024 Batch 2 Android Development",
                          date: "May 2024 — Jan 2025",
                        },
                        {
                          title:
                            "Student Development Initiative Code Batch 1 Hacktiv8 & IBMSkillsBuild",
                          date: "May 2025 — Present",
                        },
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ x: 5 }}
                          className={`mb-4 relative ${
                            index !== 3
                              ? "before:content-[''] before:absolute before:top-0 before:left-[-24px] before:w-[1px] before:h-[calc(100%+20px)] before:bg-[#2A2A2A]"
                              : ""
                          } after:content-[''] after:absolute after:top-1 after:left-[-27px] after:w-2 after:h-2 after:bg-gradient-to-r after:from-[#FFD700] after:to-[#D4A017] after:rounded-full after:shadow-[0_0_0_4px_#2A2A2A]`}
                        >
                          <h4 className="text-lg font-semibold text-white">
                            {item.title}
                          </h4>
                          <span className="text-[#FFD700] text-sm">
                            {item.date}
                          </span>
                          <p className="text-sm text-[#A0A0A0] font-light mt-2">
                            Nemo enims ipsam voluptatem, blanditiis praesentium
                            voluptum delenit atque corrupti, quos dolores et
                            quas molestias exceptur.
                          </p>
                        </motion.li>
                      ))}
                    </ol>
                  </section>
                  <section className="mt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#D4A017] rounded-lg flex items-center justify-center text-[#121212] shadow-md"
                      >
                        📚
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">
                        Experience
                      </h3>
                    </div>
                    <ol className="ml-12 relative">
                      {[
                        {
                          title:
                            "Project Manager of the Capstone Project team C242-PS019",
                          date: "May 2024 — Jan 2025",
                        },
                        {
                          title: "Assistant Programmer PT. Pancasakti Group",
                          date: "May 2024 — Dec 2024",
                        },
                        {
                          title:
                            "Project Manager of Program Kreativitas Mahasiswa 2025",
                          date: "Feb 2025 — Present",
                        },
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ x: 5 }}
                          className={`mb-4 relative ${
                            index !== 2
                              ? "before:content-[''] before:absolute before:top-0 before:left-[-24px] before:w-[1px] before:h-[calc(100%+20px)] before:bg-[#2A2A2A]"
                              : ""
                          } after:content-[''] after:absolute after:top-1 after:left-[-27px] after:w-2 after:h-2 after:bg-gradient-to-r after:from-[#FFD700] after:to-[#D4A017] after:rounded-full after:shadow-[0_0_0_4px_#2A2A2A]`}
                        >
                          <h4 className="text-lg font-semibold text-white">
                            {item.title}
                          </h4>
                          <span className="text-[#FFD700] text-sm">
                            {item.date}
                          </span>
                          <p className="text-sm text-[#A0A0A0] font-light mt-2">
                            Nemo enim ipsam voluptatem blanditiis praesentium
                            voluptum delenit atque corrupti, quos dolores et
                            qvuas molestias exceptur.
                          </p>
                        </motion.li>
                      ))}
                    </ol>
                  </section>
                  <section className="mt-6">
                    <h3 className="text-xl font-bold text-white mb-5">
                      My Skills
                    </h3>
                    <ul className="grid grid-cols-3 gap-4 p-4">
                      {[
                        "Kotlin",
                        "CSS",
                        "Javascript",
                        "PHP",
                        "Java",
                        "UI/UX",
                        "Public Speaking",
                        "Communication",
                        "Leadership",
                      ].map((skill, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ y: -5, scale: 1.05 }}
                          className="text-sm text-white font-semibold text-center p-3 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-lg shadow-lg"
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </section>
                </motion.article>
              )}
            </AnimatePresence>

            {/* Portfolio Section */}
            <AnimatePresence mode="wait">
              {activePage === "portfolio" && (
                <motion.article
                  key="portfolio"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 shadow-2xl"
                >
                  <header>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#FFD700] after:to-[#D4A017] after:rounded">
                      Portfolio
                    </h2>
                  </header>
                  <section className="mt-6">
                    <ul className="hidden lg:flex gap-6 mb-6">
                      {[
                        "All",
                        "Web design",
                        "Applications",
                        "Web development",
                      ].map((filter) => (
                        <motion.li
                          key={filter}
                          whileHover={{ y: -3, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <button
                            onClick={() =>
                              filterProjects(
                                filter.toLowerCase() as ProjectCategory
                              )
                            }
                            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                              selectedFilter === filter.toLowerCase()
                                ? "text-[#FFD700] bg-[#2A2A2A] shadow-inner"
                                : "text-[#A0A0A0] hover:text-[#FFD700] hover:bg-[#2A2A2A]/50"
                            }`}
                          >
                            {filter}
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="lg:hidden relative mb-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-[#1A1A1A] text-[#A0A0A0] flex justify-between items-center p-3 border border-[#2A2A2A] rounded-xl"
                        onClick={() => setIsSidebarActive(!isSidebarActive)}
                      >
                        <span>
                          {selectedFilter.charAt(0).toUpperCase() +
                            selectedFilter.slice(1)}
                        </span>
                        <span>↓</span>
                      </motion.button>
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isSidebarActive ? 1 : 0,
                          height: isSidebarActive ? "auto" : 0,
                        }}
                        className={`absolute w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl mt-2 p-2 ${
                          isSidebarActive ? "block" : "hidden"
                        }`}
                      >
                        {[
                          "All",
                          "Web design",
                          "Applications",
                          "Web development",
                        ].map((filter) => (
                          <motion.li
                            key={filter}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <button
                              onClick={() => {
                                filterProjects(
                                  filter.toLowerCase() as ProjectCategory
                                );
                                setIsSidebarActive(false);
                              }}
                              className="w-full text-left text-sm text-[#A0A0A0] p-2 hover:bg-[#2A2A2A] hover:text-[#FFD700] rounded-lg transition-colors"
                            >
                              {filter}
                            </button>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {projects.map(
                        (project, index) =>
                          (selectedFilter === "all" ||
                            selectedFilter === project.category) && (
                            <motion.li
                              key={index}
                              variants={itemVariants}
                              whileHover={{
                                y: -10,
                                scale: 1.03,
                                boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
                              }}
                            >
                              <a href="#" className="block">
                                <div className="relative w-full h-56 rounded-2xl overflow-hidden group">
                                  <Image
                                    src={project.img}
                                    alt={project.title}
                                    width={400}
                                    height={224}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                  />
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.7 }}
                                    className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent transition-all duration-300"
                                  ></motion.div>
                                  <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-4 left-4 bg-[#FFD700] text-[#121212] px-4 py-2 rounded-lg font-semibold"
                                  >
                                    View Project
                                  </motion.div>
                                </div>
                                <h3 className="text-lg font-semibold text-white mt-4">
                                  {project.title}
                                </h3>
                                <p className="text-sm text-[#A0A0A0]">
                                  {project.category.charAt(0).toUpperCase() +
                                    project.category.slice(1)}
                                </p>
                              </a>
                            </motion.li>
                          )
                      )}
                    </ul>
                  </section>
                </motion.article>
              )}
            </AnimatePresence>

            {/* Blog Section */}
            <AnimatePresence mode="wait">
              {activePage === "blog" && (
                <motion.article
                  key="blog"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 shadow-2xl"
                >
                  <header>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#FFD700] after:to-[#D4A017] after:rounded">
                      Blog
                    </h2>
                  </header>
                  <section className="mt-6">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {blogPosts.map((post, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          whileHover={{
                            y: -8,
                            scale: 1.03,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                          }}
                        >
                          <a
                            href="#"
                            className="block bg-[#2A2A2A] rounded-2xl shadow-lg overflow-hidden"
                          >
                            <div className="w-full h-56 rounded-t-2xl overflow-hidden group">
                              <Image
                                src={post.img}
                                alt={post.title}
                                width={400}
                                height={224}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>
                            <div className="p-5">
                              <div className="flex items-center gap-2 mb-2">
                                <p className="text-sm text-[#A0A0A0]">
                                  {post.category}
                                </p>
                                <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
                                <time className="text-sm text-[#A0A0A0]">
                                  {post.date}
                                </time>
                              </div>
                              <h3 className="text-lg font-semibold text-white hover:text-[#FFD700] transition-colors duration-200">
                                {post.title}
                              </h3>
                              <p className="text-sm text-[#A0A0A0] mt-2">
                                {post.text}
                              </p>
                            </div>
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </section>
                </motion.article>
              )}
            </AnimatePresence>

            {/* Contact Section */}
            <AnimatePresence mode="wait">
              {activePage === "contact" && (
                <motion.article
                  key="contact"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 shadow-2xl"
                >
                  <header>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#FFD700] after:to-[#D4A017] after:rounded">
                      Contact
                    </h2>
                  </header>
                  <section className="mt-6 h-72 w-full rounded-2xl border border-[#2A2A2A] overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.309018369834!2d106.79730561476944!3d-6.223166995494159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8b0000001%3A0x6c1b8a8c8f8b8c8c!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1697608789441!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="grayscale contrast-125"
                    ></iframe>
                  </section>
                  <section className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-5">
                      Contact Form
                    </h3>
                    <form className="space-y-6" onInput={handleFormInput}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <motion.input
                          whileFocus={{ scale: 1.03, borderColor: "#FFD700" }}
                          type="text"
                          placeholder="Full name"
                          required
                          className="w-full p-4 bg-[#2A2A2A] border border-[#2A2A2A] rounded-xl text-white placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#FFD700] invalid:focus:border-[#FF4D4D] transition-all duration-300"
                        />
                        <motion.input
                          whileFocus={{ scale: 1.03, borderColor: "#FFD700" }}
                          type="email"
                          placeholder="Email address"
                          required
                          className="w-full p-4 bg-[#2A2A2A] border border-[#2A2A2A] rounded-xl text-white placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#FFD700] invalid:focus:border-[#FF4D4D] transition-all duration-300"
                        />
                      </div>
                      <motion.textarea
                        whileFocus={{ scale: 1.03, borderColor: "#FFD700" }}
                        placeholder="Your Message"
                        required
                        className="w-full p-4 h-36 bg-[#2A2A2A] border border-[#2A2A2A] rounded-xl text-white placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#FFD700] resize-y transition-all duration-300"
                      ></motion.textarea>
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          backgroundImage:
                            "linear-gradient(to bottom right, #FFD700, #D4A017)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={!formValid}
                        className="w-full lg:w-auto bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] text-[#FFD700] flex justify-center items-center gap-2 p-4 rounded-xl font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>✈️</span>
                        <span>Send Message</span>
                      </motion.button>
                    </form>
                  </section>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}
