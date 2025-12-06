import { useState } from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaRedditAlien,
  FaDiscord,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { SiFiverr, SiTiktok } from "react-icons/si";
import { MdEmail } from "react-icons/md";

// bilingual nav labels
const NAV_ITEMS = [
  { id: "about", labelEn: "About", labelBn: "সম্পর্কে" },
  { id: "education", labelEn: "Education", labelBn: "শিক্ষা" },
  { id: "skills", labelEn: "Skills", labelBn: "দক্ষতা" },
  { id: "job", labelEn: "Job & Internship", labelBn: "জব ও ইন্টার্নশিপ" },
  { id: "experience", labelEn: "Experience", labelBn: "অভিজ্ঞতা" },
  { id: "services", labelEn: "Services", labelBn: "সার্ভিস" },
  { id: "projects", labelEn: "Projects", labelBn: "প্রজেক্ট" },
  { id: "references", labelEn: "References", labelBn: "রেফারেন্স" },
  { id: "contact", labelEn: "Contact", labelBn: "যোগাযোগ" },
];

const majorProjects = [
  {
    emoji: "🍳",
    images: [
      "/projects/moodchef-1.png",
      "/projects/moodchef-2.png",
      "/projects/moodchef-3.png",
    ],
    title: "MoodChef App",
    desc: "Personalized recipe & food suggestion app based on user mood with integrated API and clean UI/UX.",
    tags: ["Android", "Java", "API", "UI/UX"],
    githubUrl: "https://github.com/abdullha69/MoodChefApp",
  },
  {
    emoji: "🧮",
    images: ["/projects/scientific-1.png", "/projects/scientific-2.png"],
    title: "Scientific Calculator App",
    desc: "Advanced calculator with dark/light mode, scrollable history and animated buttons.",
    tags: ["Android", "Java", "Animations"],
    githubUrl: "https://github.com/abdullha69/ScientificCalculatorApp",
  },
  {
    emoji: "🔐",
    images: [
      "/projects/division-login-1.png",
      "/projects/division-login-2.png",
    ],
    title: "Division Login App",
    desc: "Secure login with CAPTCHA, Lottie animations, theme toggle and vibration feedback.",
    tags: ["Android", "Java", "Security"],
    githubUrl: "https://github.com/abdullha69/DivisionLoginApp",
  },
  {
    emoji: "❓",
    images: ["/projects/quiz-earn-1.png", "/projects/quiz-earn-2.png"],
    title: "Quiz & Earn Application",
    desc: "Quiz app with auth, timer, animations, sound effects and PDF result reports.",
    tags: ["Android", "Java", "Quiz", "PDF"],
    githubUrl: "https://github.com/abdullha69/Quiz-and-Earn-Application",
  },
];

const miniProjects = [
  {
    emoji: "✅",
    images: ["/projects/todo-1.png", "/projects/todo-2.png"],
    title: "To-Do List App",
    desc: "Task management mini app with add/remove and simple clean UI.",
    tags: ["Android", "Java"],
    githubUrl: "#",
  },
  {
    emoji: "📋",
    images: [
      "/projects/dynamic-list-1.png",
      "/projects/dynamic-list-2.png",
    ],
    title: "Dynamic List App",
    desc: "Customizable dynamic lists with text & image support and smooth interaction.",
    tags: ["Android", "Java", "UI"],
    githubUrl: "https://github.com/abdullha69/-Dynamic-list-app",
  },
  {
    emoji: "🔢",
    images: [
      "/projects/login-captcha-1.png",
      "/projects/login-captcha-2.png",
    ],
    title: "Login CAPTCHA App",
    desc: "Secure login using factor-pair CAPTCHA verification with animations and theme toggle.",
    tags: ["Android", "Java", "Security"],
    githubUrl: "https://github.com/abdullha69/LoginCaptchaApp",
  },
  {
    emoji: "➕",
    images: ["/projects/edu-mini-1.png", "/projects/edu-mini-2.png"],
    title: "Educational Mini Apps",
    desc: "Addition & basic login apps with responsive UI and database handling (SQLite/Firebase).",
    tags: ["Android", "Java", "SQLite", "Firebase"],
    githubUrl: "https://github.com/abdullha69/AdditionLoginApp",
  },
];

function SectionHeading({ id, title, subtitle }) {
  return (
    <div id={id} className="mb-6 scroll-mt-24 text-center">
      <h2 className="text-xl md:text-2xl font-semibold md:font-bold tracking-tight text-slate-900 flex items-center justify-center gap-2">
        <span>{title}</span>
      </h2>
      {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
    </div>
  );
}

function ProjectCard({ emoji, images = [], title, desc, tags, githubUrl }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = images && images.length > 0;
  const currentImage = hasImages ? images[currentIndex] : null;

  return (
    <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-full w-full rounded-2xl bg-white/95 p-4 flex flex-col">
        {/* image / emoji box */}
        {hasImages ? (
          <div className="relative mb-3 h-24 w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm">
            <img
              src={currentImage}
              alt={title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* small dots for multiple images */}
            {images.length > 1 && (
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`h-1.5 w-3 rounded-full transition-all duration-200 ${
                      idx === currentIndex
                        ? "bg-emerald-500"
                        : "bg-white/70 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mb-3 flex h-24 w-full items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-3xl text-white shadow-md shadow-sky-400/60">
            <span>{emoji}</span>
          </div>
        )}

        {/* title & description */}
        <h3 className="mb-1 text-base font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mb-3 text-sm text-slate-600 flex-1">{desc}</p>

        {/* tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub button / placeholder */}
        {githubUrl && githubUrl !== "#" ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-emerald-400/60 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            View on GitHub
          </a>
        ) : (
          <p className="text-[11px] text-slate-400">
            GitHub link: update later.
          </p>
        )}
      </div>
    </div>
  );
}

function SocialIconButton({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-md shadow-sky-400/60 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
      aria-label={label}
    >
      <Icon className="text-lg" />
    </a>
  );
}

function SkillCard({ title, emoji, items }) {
  return (
    <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-full w-full rounded-2xl bg-white/90 px-4 py-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-lg text-white shadow-md shadow-emerald-400/60 group-hover:scale-110 transition-transform duration-300">
            <span>{emoji}</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        </div>

        <ul className="space-y-1 text-xs text-slate-600 mt-1">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, body }) {
  return (
    <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-full w-full rounded-2xl bg-white/95 p-4">
        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-md shadow-emerald-400/60 group-hover:scale-110 transition-transform duration-300">
          <span>{icon}</span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs text-slate-600">{body}</p>
      </div>
    </div>
  );
}

function ExperienceCard({ icon, title, place, time, body }) {
  return (
    <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-full w-full rounded-2xl bg-white/90 p-4 flex flex-col gap-2">
        <div className="flex items-center gap-3 mb-1">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-lg text-white shadow-md shadow-emerald-400/60">
            {icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{title}</p>
            <p className="text-[11px] text-slate-500">
              {place} • {time}
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-600">{body}</p>
      </div>
    </div>
  );
}

function TagBox({ text }) {
  return (
    <div className="rounded-xl bg-gradient-to-r from-sky-50 to-emerald-50 px-3 py-2 shadow-sm border border-emerald-50">
      <p className="text-xs font-medium text-emerald-700">{text}</p>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [showNextTechModal, setShowNextTechModal] = useState(false);
  const [activeNav, setActiveNav] = useState("hero"); // hero = home

  const mainBgClass =
    theme === "dark"
      ? "bg-slate-950 text-slate-100"
      : "bg-gradient-to-br from-slate-100 via-sky-50 to-slate-100 text-slate-900";

  const changeSection = (id) => {
    setActiveNav(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const t = {
    heroTagline:
      language === "en"
        ? "Mobile App Developer | Android (Java) | Flutter Learner"
        : "মোবাইল অ্যাপ ডেভেলপার | অ্যান্ড্রয়েড (জাভা) | ফ্লাটার লার্নার",
    heroDesc:
      language === "en"
        ? "An enthusiastic Computer Science student with a passion for creating modern Android apps, smooth UI animations and user-friendly mobile experiences. Currently exploring Flutter to build cross-platform apps."
        : "একজন উদ্যমী কম্পিউটার সায়েন্স শিক্ষার্থী, আধুনিক অ্যান্ড্রয়েড অ্যাপ, স্মুথ UI অ্যানিমেশন এবং ইউজার-ফ্রেন্ডলি মোবাইল এক্সপেরিয়েন্স তৈরি করতে যার ভীষণ আগ্রহ। বর্তমানে ক্রস-প্ল্যাটফর্ম অ্যাপ তৈরি করার জন্য Flutter শিখছি।",
    btnContact: language === "en" ? "Get In Touch" : "যোগাযোগ করুন",
    btnCv: language === "en" ? "Download CV" : "সিভি ডাউনলোড",
    aboutTitle: language === "en" ? "🙋‍♂️ About Me" : "🙋‍♂️ আমার সম্পর্কে",
    aboutSub:
      language === "en" ? "Get to know me better" : "আমার সম্পর্কে একটু বিস্তারিত",
    eduTitle:
      language === "en" ? "🎓 My Education" : "🎓 শিক্ষাগত যোগ্যতা",
    skillTitle:
      language === "en" ? "🛠 Technical Skills" : "🛠 প্রযুক্তিগত দক্ষতা",
    jobTitle:
      language === "en" ? "💼 Job & Internship" : "💼 জব ও ইন্টার্নশিপ অভিজ্ঞতা",
    jobSub:
      language === "en"
        ? "Current internship and career starting point."
        : "বর্তমান ইন্টার্নশিপ এবং ক্যারিয়ারের শুরু।",
    expTitle:
      language === "en"
        ? "📌 Experience & Volunteering"
        : "📌 অভিজ্ঞতা ও ভলান্টিয়ারিং",
    servicesTitle:
      language === "en" ? "🚀 My Services" : "🚀 আমি যেসব সার্ভিস দিতে পারি",
    servicesSub:
      language === "en"
        ? "Mobile-focused development with modern, responsive UI."
        : "মোবাইল ফোকাসড ডেভেলপমেন্ট, আধুনিক ও রেসপন্সিভ UI সহ।",
    projectsTitle:
      language === "en" ? "📱 Projects" : "📱 প্রজেক্ট সমূহ",
    projectsSub:
      language === "en"
        ? "Android & mini app projects from coursework and practice."
        : "কোর্সওয়ার্ক ও প্র্যাকটিস থেকে তৈরি অ্যান্ড্রয়েড ও মিনি অ্যাপ প্রজেক্ট।",
    refTitle: language === "en" ? "📇 References" : "📇 রেফারেন্স",
    refSub:
      language === "en"
        ? "People who can vouch for my academic & technical work."
        : "যারা আমার একাডেমিক ও টেকনিক্যাল কাজ সম্পর্কে বলতে পারবেন।",
    contactTitle: language === "en" ? "✉️ Get In Touch" : "✉️ যোগাযোগ করুন",
    contactSub:
      language === "en"
        ? "Let’s discuss your next app idea or internship opportunity."
        : "আপনার পরবর্তী অ্যাপ আইডিয়া বা ইন্টার্নশিপ সুযোগ নিয়ে কথা বলা যাক।",
    followMe: language === "en" ? "Follow Me" : "ফলো করুন",
    followHint:
      language === "en"
        ? "Click any icon to open the profile."
        : "যেকোনো আইকনে ক্লিক করলেই প্রোফাইল খুলবে।",
    sendMsg: language === "en" ? "Send Message (demo)" : "মেসেজ পাঠান (ডেমো)",
    availableWork:
      language === "en" ? "Available for Work" : "কাজের জন্য উপলব্ধ",
    availableText:
      language === "en"
        ? "Open for internship, junior Android developer roles and client projects."
        : "ইন্টার্নশিপ, জুনিয়র অ্যান্ড্রয়েড ডেভেলপার রোল ও ক্লায়েন্ট প্রজেক্টের জন্য ওপেন।",
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div
        className={`min-h-screen ${mainBgClass} transition-colors duration-500`}
      >
        {/* NAVBAR */}
        <header className="sticky top-0 z-20 backdrop-blur-sm bg-gradient-to-b from-slate-50/80 to-transparent">
          <div className="mx-auto max-w-6xl px-3 pt-3 pb-2">
            <div className="flex w-full items-center justify-between gap-3 rounded-3xl bg-white/95 px-4 py-2 shadow-lg shadow-sky-100 border border-emerald-50">
              {/* LOGO → HERO (home) */}
              <button
                type="button"
                onClick={() => changeSection("hero")}
                className="flex items-center justify-center rounded-full 
                           shadow-md hover:shadow-lg hover:-translate-y-0.5 
                           active:scale-95 transition-all duration-300"
                aria-label="Go to Hero section"
              >
                <div
                  className="h-10 w-10 md:h-11 md:w-11 rounded-full overflow-hidden 
                             border border-emerald-500/80 bg-gradient-to-br 
                             from-emerald-500 to-sky-500"
                >
                  <img
                    src="/logo/ao-logo.png"
                    alt="Abdullha Hill Oneir Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>

              {/* DESKTOP NAV */}
              <nav className="hidden md:flex items-center gap-2 text-[13px] font-medium text-slate-700">
                {NAV_ITEMS.map((item) => {
                  const label =
                    language === "en" ? item.labelEn : item.labelBn;
                  const active = activeNav === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => changeSection(item.id)}
                      className={`relative px-3 py-1 rounded-full transition-all duration-300 ${
                        active
                          ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-md shadow-emerald-400/60"
                          : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </nav>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-2">
                {/* language toggle */}
                <button
                  type="button"
                  onClick={() =>
                    setLanguage((l) => (l === "en" ? "bn" : "en"))
                  }
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1
                             text-xs font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {language === "en" ? (
                    <>
                      <span className="text-emerald-600">EN</span>
                      <span className="text-slate-400">/ BN</span>
                    </>
                  ) : (
                    <>
                      <span className="text-slate-400">EN /</span>
                      <span className="text-emerald-600">BN</span>
                    </>
                  )}
                </button>

                {/* theme toggle */}
                <button
                  type="button"
                  onClick={() =>
                    setTheme((t) => (t === "light" ? "dark" : "light"))
                  }
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1
                             text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span>{theme === "light" ? "☀️" : "🌙"}</span>
                  <span>{theme === "light" ? "Light" : "Dark"}</span>
                </button>

                {/* hire me button */}
                <button
                  type="button"
                  onClick={() => changeSection("contact")}
                  className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500
                             px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-emerald-400/60
                             hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  {language === "en" ? "Hire Me" : "হায়ার করুন"}
                </button>
              </div>
            </div>

            {/* MOBILE NAV */}
            <nav className="mt-2 flex md:hidden items-center gap-2 overflow-x-auto pb-1 text-[12px] font-medium text-slate-700">
              {NAV_ITEMS.map((item) => {
                const label =
                  language === "en" ? item.labelEn : item.labelBn;
                const active = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => changeSection(item.id)}
                    className={`whitespace-nowrap px-3 py-1 rounded-full transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-md shadow-emerald-400/60"
                        : "bg-white/90 text-slate-700 border border-slate-100 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="mx-auto max-w-5xl px-4 pb-10 pt-6">
          {/* HERO (home) – logo click */}
          {activeNav === "hero" && (
            <section
  id="hero"
  className="relative scroll-mt-28 flex flex-col items-center text-center gap-6 
             overflow-hidden rounded-[32px] px-6 py-10 md:py-6
             bg-gradient-to-br from-emerald-100 via-emerald-50 to-sky-100
             shadow-[0_30px_80px_rgba(16,185,129,0.35)]"
 >
  {/* animated background layer */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="hero-diagonal" />
    <span className="hero-dot hero-dot-1" />
    <span className="hero-dot hero-dot-2" />
    <span className="hero-dot hero-dot-3" />
    <span className="hero-dot hero-dot-4" />
    <span className="hero-dot hero-dot-5" />
  </div>

  {/* === নিচে তোমার আগের hero content as-it-is রাখো === */}
  <div className="relative mt-4 h-40 w-42 md:h-48 md:w-48">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-sky-400 to-emerald-500 blur-xl opacity-70" />
    <div className="relative flex h-full w-full items-center justify-center rounded-full border-[4px] border-emerald-400 bg-slate-50/90 shadow-xl overflow-hidden">
      <img
        src="/profile/oneir.png"
        alt="Abdullha Hill Oneir"
        className="h-full w-full object-cover"
      />
    </div>
  </div>

  <div>
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
      Abdullha Hill Oneir
    </h1>
    <p className="mt-3 text-lg font-medium text-slate-700">
      {t.heroTagline}
    </p>
    <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600 mx-auto">
      {t.heroDesc}
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-3 mb-2 md:mb-4">
    <button
      onClick={() => changeSection("contact")}
      className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-400/70 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
    >
      {t.btnContact}
    </button>
    <a
      href="/cv/Abdullha_Hill_Oneir_CV.pdf"
      download
      className="inline-flex items-center rounded-full border border-emerald-400/80 bg-white/80 px-6 py-2 text-sm font-semibold text-emerald-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
    >
      {t.btnCv}
    </a>
  </div>
 </section>

          )}

          {/* ABOUT TAB – premium cards */}
          {activeNav === "about" && (
            <section className="mt-6">
              <SectionHeading
                id="about"
                title={t.aboutTitle}
                subtitle={t.aboutSub}
              />
              <div className="grid gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                {/* LEFT SIDE SMALL CARDS */}
                <div className="space-y-3">
                  {/* Personal Info */}
                  <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="rounded-2xl bg-white/95 px-4 py-3">
                      <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white text-sm shadow-md shadow-emerald-400/60">
                          🧍
                        </span>
                        <span>
                          {language === "en"
                            ? "Personal Info"
                            : "ব্যক্তিগত তথ্য"}
                        </span>
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        {language === "en"
                          ? "Final-year CSE student at Green University of Bangladesh."
                          : "গ্রিন ইউনিভার্সিটি অব বাংলাদেশের চূড়ান্ত বর্ষের সিএসই শিক্ষার্থী।"}
                      </p>
                    </div>
                  </div>

                  {/* Career Goal */}
                  <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="rounded-2xl bg-white/95 px-4 py-3">
                      <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white text-sm shadow-md shadow-emerald-400/60">
                          🎯
                        </span>
                        <span>
                          {language === "en"
                            ? "Career Goal"
                            : "ক্যারিয়ার লক্ষ্য"}
                        </span>
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        {language === "en"
                          ? "Build modern Android & Flutter apps with solid architecture, clean UI and delightful UX."
                          : "মডার্ন আর্কিটেকচার, ক্লিন UI এবং সুন্দর UX সহ Android ও Flutter অ্যাপ তৈরি করা।"}
                      </p>
                    </div>
                  </div>

                  {/* Hobbies */}
                  <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="rounded-2xl bg-white/95 px-4 py-3">
                      <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white text-sm shadow-md shadow-emerald-400/60">
                          💚
                        </span>
                        <span>
                          {language === "en" ? "Hobbies" : "শখ"}
                        </span>
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        {language === "en"
                          ? "Cycling, sketching UI ideas, learning new tech and helping friends with projects."
                          : "সাইক্লিং, UI আইডিয়া আঁকা, নতুন টেক শেখা এবং বন্ধুদের প্রজেক্টে সাহায্য করা।"}
                      </p>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="rounded-2xl bg-white/95 px-4 py-3">
                      <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white text-sm shadow-md shadow-emerald-400/60">
                          🌐
                        </span>
                        <span>
                          {language === "en" ? "Languages" : "ভাষা"}
                        </span>
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        {language === "en"
                          ? "Bangla (Native), English (Proficient)."
                          : "বাংলা (মাতৃভাষা), ইংরেজি (প্রফিশিয়েন্ট)।"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT: WHO I AM CARD */}
                <div className="group rounded-3xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="rounded-3xl bg-white/95 p-5 shadow-sm">
                    <h3 className="mb-2 text-base font-semibold text-slate-900 flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white text-sm shadow-md shadow-emerald-400/60">
                        👨‍💻
                      </span>
                      <span>
                        {language === "en" ? "Who I Am" : "আমি কে"}
                      </span>
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {language === "en"
                        ? "I’m Oneir, an Android developer who loves crafting apps that feel smooth, clean and intuitive. I enjoy working with Java, Firebase, REST API integration and modern UI patterns."
                        : "আমি অনির, একজন অ্যান্ড্রয়েড ডেভেলপার, স্মুথ, ক্লিন এবং ইন্টুইটিভ অ্যাপ বানাতে ভালো লাগে। জাভা, ফায়ারবেস, REST API ইন্টিগ্রেশন আর মডার্ন UI প্যাটার্ন নিয়ে কাজ করতে পছন্দ করি।"}
                      <br />
                      <br />
                      {language === "en"
                        ? "Right now I’m also exploring Flutter to build cross-platform apps while improving my problem solving, data structures and algorithms. I like to keep my code simple, readable and easy to maintain."
                        : "বর্তমানে ক্রস-প্ল্যাটফর্ম অ্যাপ বানানোর জন্য Flutter শিখছি, সাথে প্রোবলেম সলভিং, ডাটা স্ট্রাকচার আর অ্যালগরিদমও প্র্যাকটিস করছি। কোড সব সময় সিম্পল, রিডেবল আর মেইনটেইনেবল রাখতে পছন্দ করি।"}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* EDUCATION TAB */}
          {activeNav === "education" && (
            <section className="mt-4">
              <SectionHeading id="education" title={t.eduTitle} />

              <div className="space-y-4">
                {/* BSc – Green University of Bangladesh */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/90 border border-slate-100 px-4 py-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden">
                    <img
                      src="/education/gub.png"
                      alt="Green University of Bangladesh"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        BSc. in Engineering (CSE)
                      </p>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        {language === "en" ? "Ongoing" : "চলমান"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Institute: Green University of Bangladesh
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Subject: Computer Science and Engineering
                    </p>
                  </div>
                </div>

                {/* HSC – Milestone School & College */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/90 border border-slate-100 px-4 py-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden">
                    <img
                      src="/education/milestone.png"
                      alt="Milestone School & College"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        Higher Secondary Certificate (HSC)
                      </p>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        {language === "en" ? "Completed" : "সম্পন্ন"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Institute: Milestone School & College, Uttara, Dhaka
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Group: Science · Result: GPA 5.00 (Out of 5.00)
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Passing Year: 2019 · Board: Dhaka
                    </p>
                  </div>
                </div>

                {/* SSC – Masua High School */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/90 border border-slate-100 px-4 py-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden">
                    <img
                      src="/education/masua.png"
                      alt="Masua High School"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        Secondary School Certificate (SSC)
                      </p>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        {language === "en" ? "Completed" : "সম্পন্ন"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Institute: Masua High School
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Group: Science · Result: GPA 4.59 (Out of 5.00)
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Passing Year: 2017 · Board: Dhaka
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* SKILLS TAB */}
          {activeNav === "skills" && (
            <section className="mt-4">
              <SectionHeading id="skills" title={t.skillTitle} />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard
                  emoji="💻"
                  title={
                    language === "en"
                      ? "Programming Languages"
                      : "প্রোগ্রামিং ল্যাঙ্গুয়েজ"
                  }
                  items={["C", "C++", "Java", "Python", "JavaScript"]}
                />
                <SkillCard
                  emoji="📱"
                  title={
                    language === "en" ? "Mobile & Web" : "মোবাইল ও ওয়েব"
                  }
                  items={["Android (Java)", "Flutter (Learning)", "HTML", "CSS"]}
                />
                <SkillCard
                  emoji="🗄"
                  title="Database"
                  items={["MySQL", "Firebase"]}
                />
                <SkillCard
                  emoji="🧰"
                  title={language === "en" ? "Tools" : "টুলস"}
                  items={["Android Studio", "VS Code", "Git & GitHub", "Figma"]}
                />
                <SkillCard
                  emoji="🤝"
                  title={language === "en" ? "Soft Skills" : "সফট স্কিলস"}
                  items={[
                    "Communication",
                    "Teamwork",
                    "Time Management",
                    "Self-learning",
                  ]}
                />
              </div>
            </section>
          )}

          {/* JOB & INTERNSHIP TAB */}
          {activeNav === "job" && (
            <section className="mt-4">
              <SectionHeading
                id="job"
                title={t.jobTitle}
                subtitle={t.jobSub}
              />

              <div className="group rounded-3xl bg-gradient-to-br from-emerald-100/70 via-sky-100/60 to-emerald-50/80 p-[1px] shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="rounded-3xl bg-white/95 p-5 md:p-6 flex flex-col gap-4">
                  {/* top row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* left vertical timeline bar */}
                      <div className="hidden md:block h-16 w-[2px] rounded-full bg-gradient-to-b from-emerald-400 to-sky-400 relative mr-2">
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-500 shadow-md shadow-emerald-300" />
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-sky-400" />
                      </div>

                      <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden shadow-sm">
                        <img
                          src="/company/nexttech.png"
                          alt="Next Tech Limited"
                          className="h-full w-full object-contain p-1.5"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Next Tech Limited —{" "}
                          {language === "en"
                            ? "Intern (Flutter Focus)"
                            : "ইন্টার্ন (Flutter ফোকাস)"}
                        </p>
                        <p className="text-xs text-slate-500">
                          October 2025 · Dhaka, Bangladesh
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                        {language === "en"
                          ? "Current Internship"
                          : "বর্তমান ইন্টার্নশিপ"}
                      </span>
                      <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-semibold text-sky-700">
                        Flutter · Android · Teamwork
                      </span>
                      <button
                        onClick={() => setShowNextTechModal(true)}
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-emerald-400/60 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                      >
                        {language === "en" ? "View Details" : "ডিটেইল দেখুন"}
                      </button>
                    </div>
                  </div>

                  {/* description */}
                  <ul className="mt-1 space-y-1.5 text-sm text-slate-700">
                    <li>
                      •{" "}
                      {language === "en"
                        ? "Working on Flutter-based mobile app modules and UI screens."
                        : "Flutter ভিত্তিক মোবাইল অ্যাপ মডিউল ও UI স্ক্রিনে কাজ করছি।"}
                    </li>
                    <li>
                      •{" "}
                      {language === "en"
                        ? "Collaborating on responsive layouts, animations and API integration."
                        : "রেসপন্সিভ লেআউট, অ্যানিমেশন ও API ইন্টিগ্রেশনে টিমের সাথে কাজ।"}
                    </li>
                    <li>
                      •{" "}
                      {language === "en"
                        ? "Focusing on clean code, state management and performance."
                        : "ক্লিন কোড, স্টেট ম্যানেজমেন্ট ও পারফরম্যান্সের উপর ফোকাস করছি।"}
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* EXPERIENCE TAB */}
          {activeNav === "experience" && (
            <section className="mt-4">
              <SectionHeading id="experience" title={t.expTitle} />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ExperienceCard
                  icon="📱"
                  title={
                    language === "en"
                      ? "Freelance Mobile App Developer"
                      : "ফ্রিল্যান্স মোবাইল অ্যাপ ডেভেলপার"
                  }
                  place={
                    language === "en" ? "Remote / Online" : "রিমোট / অনলাইন"
                  }
                  time={
                    language === "en" ? "2024 – Present" : "২০২৪ – বর্তমান"
                  }
                  body={
                    language === "en"
                      ? "Building small Android apps for portfolio – login screens, quiz apps, recipe apps and mini tools."
                      : "পোর্টফোলিওর জন্য ছোট ছোট অ্যান্ড্রয়েড অ্যাপ তৈরি করছি – লগইন স্ক্রিন, কুইজ অ্যাপ, রেসিপি অ্যাপ ও মিনি টুলস।"
                  }
                />
                <ExperienceCard
                  icon="🎓"
                  title={
                    language === "en"
                      ? "Academic Project Contributor"
                      : "একাডেমিক প্রজেক্ট কন্ট্রিবিউটর"
                  }
                  place="GUB, CSE"
                  time={
                    language === "en"
                      ? "Semester projects"
                      : "সেমেস্টার প্রজেক্ট"
                  }
                  body={
                    language === "en"
                      ? "Worked on projects focusing on problem solving, OOP, database design and UI implementation."
                      : "প্রবলেম সলভিং, OOP, ডাটাবেস ডিজাইন এবং UI ইমপ্লিমেন্টেশন কেন্দ্রিক প্রজেক্টে কাজ করেছি।"
                  }
                />
                <ExperienceCard
                  icon="🤝"
                  title={
                    language === "en"
                      ? "Volunteering & Events"
                      : "ভলান্টিয়ারিং ও ইভেন্ট"
                  }
                  place={
                    language === "en"
                      ? "Campus & Online"
                      : "ক্যাম্পাস ও অনলাইন"
                  }
                  time={language === "en" ? "Ongoing" : "চলমান"}
                  body={
                    language === "en"
                      ? "Helping friends with project setup, GitHub, Android Studio configuration and basic debugging."
                      : "বন্ধুদের প্রজেক্ট সেটআপ, গিটহাব, অ্যান্ড্রয়েড স্টুডিও কনফিগারেশন ও বেসিক ডিবাগিংয়ে সাহায্য করি।"
                  }
                />
              </div>
            </section>
          )}

          {/* SERVICES TAB */}
          {activeNav === "services" && (
            <section className="mt-4">
              <SectionHeading
                id="services"
                title={t.servicesTitle}
                subtitle={t.servicesSub}
              />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ServiceCard
                  icon="📱"
                  title={
                    language === "en"
                      ? "App Development"
                      : "অ্যাপ ডেভেলপমেন্ট"
                  }
                  body={
                    language === "en"
                      ? "Android apps with clean UI, Firebase integration and optimized performance."
                      : "ক্লিন UI, Firebase ইন্টিগ্রেশন ও অপ্টিমাইজড পারফরম্যান্সসহ অ্যান্ড্রয়েড অ্যাপ।"
                  }
                />
                <ServiceCard
                  icon="🎨"
                  title={
                    language === "en" ? "UI/UX Design" : "UI/UX ডিজাইন"
                  }
                  body={
                    language === "en"
                      ? "Smooth, minimal and user-friendly interfaces for mobile screens."
                      : "স্মুথ, মিনিমাল ও ইউজার-ফ্রেন্ডলি মোবাইল UI ডিজাইন।"
                  }
                />
                <ServiceCard
                  icon="⚙️"
                  title={
                    language === "en"
                      ? "API Integration"
                      : "API ইন্টিগ্রেশন"
                  }
                  body={
                    language === "en"
                      ? "REST API, JSON parsing and backend connection for dynamic apps."
                      : "REST API, JSON পার্সিং এবং ব্যাকএন্ড কানেকশন সহ ডাইনামিক অ্যাপ।"
                  }
                />
                <ServiceCard
                  icon="🚀"
                  title={
                    language === "en"
                      ? "Performance Optimization"
                      : "পারফরম্যান্স অপ্টিমাইজেশন"
                  }
                  body={
                    language === "en"
                      ? "Improving app speed, reducing re-renders and fixing memory issues."
                      : "অ্যাপ স্পিড বাড়ানো, অপ্রয়োজনীয় রি-রেন্ডার কমানো ও মেমোরি ইস্যু ফিক্স করা।"
                  }
                />
              </div>
            </section>
          )}

          {/* PROJECTS TAB */}
          {activeNav === "projects" && (
            <section className="mt-4">
              <SectionHeading
                id="projects"
                title={t.projectsTitle}
                subtitle={t.projectsSub}
              />
              <h3 className="mb-3 text-sm font-semibold text-slate-800">
                {language === "en"
                  ? "Mobile App Development – Major Projects"
                  : "মোবাইল অ্যাপ ডেভেলপমেন্ট – মেজর প্রজেক্ট"}
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {majorProjects.map((p) => (
                  <ProjectCard key={p.title} {...p} />
                ))}
              </div>

              <h3 className="mt-7 mb-3 text-sm font-semibold text-slate-800">
                {language === "en"
                  ? "Mobile App Development – Mini Projects"
                  : "মোবাইল অ্যাপ ডেভেলপমেন্ট – মিনি প্রজেক্ট"}
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {miniProjects.map((p) => (
                  <ProjectCard key={p.title} {...p} />
                ))}
              </div>
            </section>
          )}

          {/* REFERENCES TAB */}
          {activeNav === "references" && (
            <section className="mt-4">
              <SectionHeading
                id="references"
                title={t.refTitle}
                subtitle={t.refSub}
              />

              <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-700">
                {/* Reference 1 */}
                <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="h-full w-full rounded-2xl bg-white/95 p-4 flex gap-3">
                    <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white text-base shadow-md shadow-emerald-400/60">
                      <span>👤</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Ms. Umme Ruman
                      </p>
                      <p className="text-xs text-slate-700">
                        {language === "en"
                          ? "Assistant Professor, Department of CSE"
                          : "সহকারী অধ্যাপক, সিএসই বিভাগ"}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Green University of Bangladesh
                      </p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        Email:{" "}
                        <a
                          href="mailto:ruman@cse.green.edu.bd"
                          className="font-medium text-emerald-600 hover:underline"
                        >
                          ruman@cse.green.edu.bd
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reference 2 */}
                <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="h-full w-full rounded-2xl bg-white/95 p-4 flex gap-3">
                    <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white text-base shadow-md shadow-emerald-400/60">
                      <span>👤</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        Mr. Montaser Abdul Quader
                      </p>
                      <p className="text-xs text-slate-700">
                        {language === "en"
                          ? "Lecturer, Department of CSE"
                          : "লেকচারার, সিএসই বিভাগ"}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Green University of Bangladesh
                      </p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        Email:{" "}
                        <a
                          href="mailto:montaser@cse.green.edu.bd"
                          className="font-medium text-emerald-600 hover:underline"
                        >
                          montaser@cse.green.edu.bd
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CONTACT TAB */}
          {activeNav === "contact" && (
            <section className="mt-4">
              <SectionHeading
                id="contact"
                title={t.contactTitle}
                subtitle={t.contactSub}
              />

              <div className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                {/* LEFT: FORM */}
                <div className="group rounded-3xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="rounded-3xl bg-white/95 p-5 shadow-sm">
                    <div className="space-y-3">
                      <input
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                        placeholder={
                          language === "en" ? "Your name" : "আপনার নাম"
                        }
                      />
                      <input
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                        type="email"
                        placeholder={
                          language === "en"
                            ? "your.email@example.com"
                            : "আপনার ইমেইল"
                        }
                      />
                      <textarea
                        rows={4}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
                        placeholder={
                          language === "en"
                            ? "Write your message..."
                            : "আপনার মেসেজ লিখুন..."
                        }
                      />
                      <button className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-400/60 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                        {t.sendMsg}
                      </button>
                    </div>
                  </div>
                </div>

                {/* RIGHT: INFO + SOCIAL + STATUS */}
                <div className="space-y-4">
                  {/* Contact info card */}
                  <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="rounded-2xl bg-white/95 p-5 shadow-sm">
                      <h3 className="mb-3 text-sm font-semibold text-slate-900 flex items-center gap-1">
                        <span>📬</span>
                        <span>
                          {language === "en"
                            ? "Contact Information"
                            : "যোগাযোগের তথ্য"}
                        </span>
                      </h3>
                      <div className="space-y-2 text-sm text-slate-600">
                        <p className="flex items-center gap-2">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                            <MdEmail />
                          </span>
                          <span>abdullahoneir@gmail.com</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                            📞
                          </span>
                          <span>+880 1772-371330</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                            📍
                          </span>
                          <span>
                            {language === "en"
                              ? "Dhaka, Bangladesh"
                              : "ঢাকা, বাংলাদেশ"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social icons card */}
                  <div className="group rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-[1px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="rounded-2xl bg-white/95 p-5 shadow-sm">
                      <h3 className="mb-1 text-sm font-semibold text-slate-900">
                        {t.followMe}
                      </h3>
                      <p className="mb-3 text-xs text-slate-500">
                        {t.followHint}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        <SocialIconButton
                          href="https://github.com/abdullha69"
                          label="GitHub"
                          Icon={FaGithub}
                        />
                        <SocialIconButton
                          href="https://x.com/AbdullhaOneir69"
                          label="X (Twitter)"
                          Icon={FaTwitter}
                        />
                        <SocialIconButton
                          href="https://www.fiverr.com/abdullha_69"
                          label="Fiverr"
                          Icon={SiFiverr}
                        />
                        <SocialIconButton
                          href="mailto:abdullahoneir@gmail.com"
                          label="Email"
                          Icon={MdEmail}
                        />
                        <SocialIconButton
                          href="https://web.whatsapp.com/+8801772371330"
                          label="WhatsApp"
                          Icon={FaWhatsapp}
                        />
                        <SocialIconButton
                          href="https://web.telegram.org/k/#@abdullha_69"
                          label="Telegram"
                          Icon={FaTelegramPlane}
                        />
                        <SocialIconButton
                          href="https://www.reddit.com/user/abdullha_69/"
                          label="Reddit"
                          Icon={FaRedditAlien}
                        />
                        <SocialIconButton
                          href="https://www.tiktok.com/@whatthefuckisoneir_69"
                          label="TikTok"
                          Icon={SiTiktok}
                        />
                        <SocialIconButton
                          href="https://www.linkedin.com/in/abdullha-hill-oneir-9b3880254/"
                          label="LinkedIn"
                          Icon={FaLinkedin}
                        />
                        <SocialIconButton
                          href="https://discord.com/channels/@abdullhahilloneir_69"
                          label="Discord"
                          Icon={FaDiscord}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Available for work bar */}
                  <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-4 text-sm text-white shadow-md shadow-emerald-400/60">
                    <p className="font-semibold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-200 animate-pulse" />
                      {t.availableWork}
                    </p>
                    <p className="mt-1 text-xs">{t.availableText}</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        {/* NEXT TECH MODAL */}
        {showNextTechModal && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 px-4">
            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden">
                    <img
                      src="/company/nexttech.png"
                      alt="Next Tech Limited"
                      className="h-full w-full object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Next Tech Limited
                    </h3>
                    <p className="text-xs text-slate-500">
                      Intern • October 2025 • Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowNextTechModal(false)}
                  className="h-8 w-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-bold hover:bg-slate-200 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <h4 className="font-semibold mb-1">
                    {language === "en"
                      ? "About the Company"
                      : "কোম্পানি সম্পর্কে"}
                  </h4>
                  <p>
                    {language === "en"
                      ? "Next Tech Limited is a leading Software Development Company & Training Institute in Bangladesh, specializing in hardware, software, web development, networking, graphics design, microcontroller, robotics, PLC, electromedical and outsourcing solutions."
                      : "নেক্সট টেক লিমিটেড বাংলাদেশের একটি শীর্ষস্থানীয় সফটওয়্যার ডেভেলপমেন্ট কোম্পানি ও ট্রেনিং ইনস্টিটিউট, যারা হার্ডওয়্যার, সফটওয়্যার, ওয়েব ডেভেলপমেন্ট, নেটওয়ার্কিং, গ্রাফিক্স ডিজাইন, মাইক্রোকন্ট্রোলার, রোবোটিক্স, PLC, ইলেক্ট্রোমেডিক্যাল এবং আউটসোর্সিং সলিউশন নিয়ে কাজ করে।"}
                  </p>
                </div>

                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-1">
                      {language === "en"
                        ? "Services & Focus Areas"
                        : "সার্ভিস ও ফোকাস এরিয়া"}
                    </h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Software Development</li>
                      <li>• Mobile App Development</li>
                      <li>• Hardware & Networking</li>
                      <li>• Robotics & Microcontroller</li>
                      <li>• Outsourcing Services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      IT & Training Services
                    </h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Web Development & Design</li>
                      <li>• IT Training & Education</li>
                      <li>• Graphics Design</li>
                      <li>• PLC & Electromedical</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    {language === "en" ? "Key Highlights" : "মূল হাইলাইটস"}
                  </h4>
                  <div className="grid gap-2 md:grid-cols-2 text-xs">
                    <TagBox text="1,500+ Students Trained" />
                    <TagBox text="80%+ Job Placement Rate" />
                    <TagBox text="Government Ministry Partnerships" />
                    <TagBox text="Comprehensive IT Solutions Provider" />
                    <TagBox text="Quality Training & Support" />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    {language === "en" ? "Training Areas" : "ট্রেনিং এরিয়া"}
                  </h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Programming (C, Java, PHP, MySQL, Python)</li>
                    <li>• Web Development (HTML, CSS, WordPress)</li>
                    <li>• Robotics & Microcontroller</li>
                    <li>• Networking & Hardware</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    {language === "en"
                      ? "Mission & Objectives"
                      : "মিশন ও অবজেক্টিভস"}
                  </h4>
                  <ul className="space-y-1 text-xs">
                    <li>
                      1.{" "}
                      {language === "en"
                        ? "Promote better ICT education through training and manufacturing software."
                        : "ট্রেনিং ও সফটওয়্যার ডেভেলপমেন্টের মাধ্যমে উন্নত ICT শিক্ষা প্রসার করা।"}
                    </li>
                    <li>
                      2.{" "}
                      {language === "en"
                        ? "Provide software development for different ministries and departments."
                        : "বিভিন্ন মন্ত্রণালয় ও ডিপার্টমেন্টের জন্য সফটওয়্যার ডেভেলপমেন্ট প্রদান।"}
                    </li>
                    <li>
                      3.{" "}
                      {language === "en"
                        ? "Provide website development and IT solutions."
                        : "ওয়েবসাইট ডেভেলপমেন্ট ও আইটি সলিউশন প্রদান।"}
                    </li>
                    <li>
                      4.{" "}
                      {language === "en"
                        ? "Provide technical assistance for design, implementation and evaluation."
                        : "ডিজাইন, ইমপ্লিমেন্টেশন ও ইভ্যালুয়েশনে টেকনিক্যাল সহযোগিতা প্রদান।"}
                    </li>
                    <li>
                      5.{" "}
                      {language === "en"
                        ? "Organize human resources management and skills development training globally."
                        : "গ্লোবালি হিউম্যান রিসোর্স ম্যানেজমেন্ট ও স্কিল ডেভেলপমেন্ট ট্রেনিংয়ের আয়োজন।"}
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    {language === "en"
                      ? "Contact Information"
                      : "যোগাযোগের তথ্য"}
                  </h4>
                  <ul className="space-y-1 text-xs">
                    <li>🌐 https://nexttechltd.com</li>
                    <li>📞 +880 1728-619131</li>
                    <li>📞 +880 1939-777799</li>
                    <li>
                      📍 57/12 Sonargaon Plaza (4th Floor), Panthapath,
                      Dhaka-1215
                    </li>
                    <li>
                      📍 744/1, 3rd Floor, West Shewrapara, Dhaka-1216
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
