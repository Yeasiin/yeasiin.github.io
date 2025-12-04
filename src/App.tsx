import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  ExternalLink,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";

export default function App() {
  // RESUME DATA EXTRACTED FROM YOUR FILE
  const skills = {
    frontend: [
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "Redux",
      "Zustand",
      "React Query",
      "SCSS",
      "Tailwind CSS",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "GraphQL",
    ],
    tools: ["Git/GitHub", "WebRTC", "WebSocket", "Stripe"],
  };

  const experience = [
    {
      company: "LIDI IT",
      role: "Web / App Developer",
      period: "Aug 2022 - Mar 2025",
      details: [
        "Developed and maintained 10+ in-house web and mobile applications using React, Next.js, and React Native.",
        "Built real-time audio/video calling functionality using WebRTC and WebSocket signaling.",
        "Optimized legacy React projects for performance and maintainability, reducing bundle size by 30%.",
        "Collaborated with designers and backend engineers to deliver pixel-perfect, high-performance UIs.",
        "Implemented reusable component libraries and design systems with Tailwind CSS and TypeScript.",
      ],
    },
    {
      company: "Freelance",
      role: "Web Developer",
      period: "May 2021 - Aug 2022",
      details: [
        "Designed and developed fully responsive websites and web apps for multiple clients.",
        "Integrated REST APIs and implemented authentication, admin features",
        "Translated client requirements into functional, maintainable React components.",
      ],
    },
  ];

  const projects = [
    {
      name: "Social Media App (React Native) ",
      tech: "React Native, WebRTC, WebSocket",
      desc: "Built social media-style mobile app with feed, profiles, chat, and real-time calling via WebRTC",
      links: [
        {
          "Android App":
            "https://play.google.com/store/apps/details?id=com.uviom.inc",
        },
        { "iOS App": "https://apps.apple.com/in/app/uviom/id6444891562" },
      ],
    },
    {
      name: "Venture — E-commerce Furniture Store",
      tech: "React.js, Stripe, Auth0",
      desc: "An e-commerce platform built with React, Stripe, and Auth0. Includes product filtering, secure checkout, and user authentication.",
      links: [
        { GitHub: "https://github.com/Yeasiin/Venture" },
        { "Live Site": "https://venture-v1.netlify.app/" },
      ],
    },
    {
      name: "Drip Loop — Clothing Store App",
      tech: "React.js, Firebase, Redux, Stripe",
      desc: "An online clothing store. Includes cart, orders, and payment flow with Firebase backend",
      links: [
        { GitHub: "https://github.com/Yeasiin/Drip-Loop" },
        { "Live Site": "https://drip-loop.netlify.app/" },
      ],
    },
    {
      name: "Recipes — Recipe Web App",
      tech: "Next.js, Contentful, Tailwind CSS",
      desc: "SEO-optimized recipe platform using Next.js and Contentful CMS with Incremental Static Regeneration (ISR).",
      links: [
        { GitHub: "https://github.com/Yeasiin/Recipes" },
        { "Live Site": "https://recipes-v1.vercel.app/" },
      ],
    },
    {
      name: "UVIOM — Marketing Site",
      tech: "Next.js, Tailwind CSS",
      desc: "Built a responsive marketing site with smooth animations, lazy loading, and performance optimization.",
      links: [{ "Live Site": "https://uviom.com/" }],
    },
    {
      name: "UVIOM Life — Web App",
      tech: "React.js, Tailwind CSS, REST API",
      desc: "Modern web app featuring dynamic content rendering, reusable layouts, and API-driven pages.",
      links: [{ "Live Site": "https://ulife.uviom.com/login" }],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-black p-4 md:p-8 overflow-x-hidden relative">
      {/* BACKGROUND CRT EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-10"></div>

      {/* HEADER / NAV */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[#00ff41] pb-6 mb-12">
        <div>
          {/* KEEPING YOUR BENGALI LOGO AS REQUESTED */}
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tighter drop-shadow-[2px_2px_0px_rgba(0,60,0,1)]">
            ইয়াছিন
          </h1>
          <p className="text-sm md:text-base opacity-80">
            {`> console.log({"user": "Yeasin Arfat"})`}
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-4 text-sm">
          <a
            href="https://github.com/yeasiin"
            target="_blank"
            className="hover:bg-[#00ff41] hover:text-black border border-[#00ff41] px-3 py-1 transition-colors flex items-center gap-2"
          >
            <Github size={16} /> GITHUB
          </a>
          <a
            href="https://linkedin.com/in/yeasiin"
            target="_blank"
            className="hover:bg-[#00ff41] hover:text-black border border-[#00ff41] px-3 py-1 transition-colors flex items-center gap-2"
          >
            <Linkedin size={16} /> LINKEDIN
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-6">
          <div className="border border-[#333] bg-[#111] p-6 relative shadow-[8px_8px_0px_0px_rgba(30,30,30,1)]">
            <div className="absolute top-0 left-0 bg-[#00ff41] text-black text-xs px-2 py-1 font-bold">
              BIO.txt
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 text-white">
              Front-End Focused{" "}
              <span className="text-[#00ff41]">Full-Stack Developer</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Having <span className="text-white">3+ years of experience</span>{" "}
              building scalable, performant web and mobile applications.
              Specialized in{" "}
              <span className="text-white">
                React.js, Next.js, and React Native
              </span>
              . Experienced in real-time systems (WebRTC) and pixel-perfect UI
              execution.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Smartphone size={14} /> +8801820018029
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} /> yeasin.px@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* STATUS PANEL */}
        <div className="md:col-span-4 space-y-4">
          <div className="border border-[#00ff41] p-4 bg-[#050510]">
            <h3 className="border-b border-[#00ff41] pb-2 mb-3 font-bold flex items-center gap-2">
              <Cpu size={16} /> TECH_STACK
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500 block text-xs mb-1">
                  // Frontend
                </span>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((s) => (
                    <span key={s} className="bg-[#00ff41] text-black px-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-gray-500 block text-xs mb-1">
                  // Backend
                </span>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((s) => (
                    <span
                      key={s}
                      className="border border-[#333] text-gray-300 px-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE (TERMINAL STYLE) */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Terminal size={24} /> EXPERIENCE_LOG
        </h3>
        <div className="space-y-8 border-l-2 border-[#333] ml-3 pl-8 relative">
          {experience.map((job, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-0 h-5 w-5 bg-[#00ff41] border-4 border-black rounded-none"></div>

              <div className="mb-1 text-sm text-gray-500">{job.period}</div>
              <h4 className="text-xl text-white font-bold">
                {job.role}{" "}
                <span className="text-[#00ff41]">@ {job.company}</span>
              </h4>

              <ul className="mt-4 space-y-2 text-gray-400">
                {job.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00ff41] mt-1">➜</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Layers size={24} /> EXECUTABLES / PROJECTS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group border border-[#333] hover:border-[#00ff41] p-6 transition-all bg-[#0a0a0a] hover:bg-[#0f150f] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#00ff41] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#00ff41] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff41]">
                {project.name}
              </h4>
              <p className="text-xs text-gray-500 mb-4 border border-[#333] inline-block px-2 py-1">
                {project.tech}
              </p>
              <p className="text-gray-400 mb-6">{project.desc}</p>

              <div className="flex gap-4">
                {project.links.map((linkObj, linkIdx) => {
                  const linkName = Object.keys(linkObj)[0];
                  const linkUrl = linkObj[linkName];
                  return (
                    <a
                      key={linkIdx}
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {linkName === "GitHub" ? (
                        <button className="text-sm border border-gray-600 hover:border-[#00ff41] hover:text-[#00ff41] px-4 py-2 uppercase transition-all flex items-center gap-2">
                          View_Code <Github size={12} />
                        </button>
                      ) : (
                        <button className="text-sm bg-[#222] hover:bg-[#00ff41] hover:text-black px-4 py-2 uppercase transition-all flex items-center gap-2">
                          {linkName.replace(" ", "_")}{" "}
                          <ExternalLink size={12} />
                        </button>
                      )}
                    </a>
                  );
                })}
              </div>
              {/* <div className="flex gap-4">
                <button className="text-sm border border-gray-600 hover:border-[#00ff41] hover:text-[#00ff41] px-4 py-2 uppercase transition-all">
                  View_Code
                </button>
                <button className="text-sm bg-[#222] hover:bg-[#00ff41] hover:text-black px-4 py-2 uppercase transition-all flex items-center gap-2">
                  Live_Demo <ExternalLink size={12} />
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#333] pt-8 text-center text-gray-600 text-sm">
        <p>
          Yeasin_Arfat_Portfolio_v2.0 <br />
          Built with Next.js, Tailwind & pure &lt;love /&gt; for code.
        </p>
      </footer>
    </div>
  );
}
