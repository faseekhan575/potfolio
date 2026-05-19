import { useState, useRef } from 'react'
import { useEffect } from 'react'
import { motion } from "motion/react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import toast from 'react-hot-toast'
    import emailjs from '@emailjs/browser'; // add at top of file

/* ═══════════════════════════════════════════════════
   REUSABLE: CROWN SVG
═══════════════════════════════════════════════════ */
function CrownIcon({ size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className="best-crown-ever drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="og" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD891" />
          <stop offset="45%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF7A1A" />
        </linearGradient>
        <linearGradient id="rg">
          <stop offset="0%" stopColor="#FF5A5A" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
      </defs>
      <g fill="url(#og)" stroke="#B94E00" strokeWidth="4">
        <path d="M32,142 L52,70 L82,128 L100,42 L118,128 L148,70 L168,142 L168,164 Q168,186 140,186 L60,186 Q32,186 32,164 Z" />
        <rect x="32" y="142" width="136" height="34" rx="11" />
        <circle cx="58" cy="160" r="11" fill="url(#rg)" />
        <circle cx="142" cy="160" r="11" fill="url(#rg)" />
        <circle cx="100" cy="152" r="20" fill="url(#rg)" stroke="#7A0000" strokeWidth="4" />
      </g>
      <circle cx="70" cy="102" r="6" fill="white" opacity="0.9" />
      <circle cx="130" cy="102" r="6" fill="white" opacity="0.9" />
      <circle cx="100" cy="58" r="8" fill="white" opacity="0.9" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   REUSABLE: LIVE BADGE
═══════════════════════════════════════════════════ */
function LiveBadge() {
  return (
    <div className="absolute top-5 right-5 bg-orange-500 text-white px-5 py-2 rounded-full text-lg font-bold flex items-center gap-2 shadow-xl z-10">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-80"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-300"></span>
      </span>
      LIVE
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   REUSABLE: TECH TAGS
═══════════════════════════════════════════════════ */
function TechTags({ tags }) {
  return (
    <div className="flex flex-wrap justify-center mt-8 gap-3 px-6">
      {tags.map((tag) => (
        <span key={tag} className="px-5 py-2 bg-orange-500 text-white rounded-full text-sm font-bold hover:bg-orange-600 transition shadow-md">
          {tag}
        </span>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   REUSABLE: PROJECT BUTTONS
═══════════════════════════════════════════════════ */
function ProjectButtons({ liveUrl, githubUrl }) {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8 w-full px-8">
      <a href={liveUrl} target="_blank" rel="noopener noreferrer"
        className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl text-center hover:from-orange-600 hover:to-orange-700 transition shadow-xl text-base">
        View Live
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer"
        className="w-full sm:w-auto px-10 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-xl text-center hover:bg-orange-500 hover:text-white transition-all duration-300 text-base">
        GitHub
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   REUSABLE: IMAGE PLACEHOLDER
═══════════════════════════════════════════════════ */
function ImgPlaceholder({ label }) {
  return (
    <div className="w-full h-56 md:h-64 bg-gray-900 border-2 border-dashed border-orange-500/40 rounded-xl flex flex-col items-center justify-center gap-3 mx-auto">
      <svg className="w-10 h-10 text-orange-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-orange-500/40 text-xs font-bold tracking-widest text-center px-4">{label}</p>
      <p className="text-gray-700 text-xs">Replace with your screenshot</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   REUSABLE: SECTION HEADING
═══════════════════════════════════════════════════ */
function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16 mt-10 px-4">
      <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-tight">{title}</h1>
      <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
      {subtitle && <p className="mt-8 text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   REUSABLE: SUB HEADING
═══════════════════════════════════════════════════ */
function SubHeading({ title }) {
  return (
    <div className="text-center mb-10 mt-14">
      <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
        <span className="text-orange-500">—</span>&nbsp;{title}&nbsp;<span className="text-orange-500">—</span>
      </h2>
      <div className="mt-3 h-px w-20 mx-auto bg-orange-500/40 rounded-full"></div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════ */
function App() {

  /* ─── Smooth Scroll Helper ─── */
  // ✅ ADDED: single helper used by both the navbar and footer links
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ─── Typing Animation ─── */
  function TypingAnimation() {
    const phrases = ["WEB DEVELOPER", "REACT DEVELOPER", "STANFORD INSTUCTOR"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
      const id = setInterval(() => setBlink(p => !p), 500);
      return () => clearInterval(id);
    }, []);

    useEffect(() => {
      if (subIndex === phrases[index].length + 1 && !isDeleting) {
        const t = setTimeout(() => setIsDeleting(true), 1200);
        return () => clearTimeout(t);
      }
      if (subIndex === 0 && isDeleting) {
        const t = setTimeout(() => { setIsDeleting(false); setIndex(p => (p + 1) % phrases.length); }, 300);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setSubIndex(p => p + (isDeleting ? -1 : 1)), isDeleting ? 60 : 120);
      return () => clearTimeout(t);
    }, [subIndex, index, isDeleting]);

    return (
      <h2 className="text-4xl font-bold text-orange-500 flex justify-end items-center">
        {phrases[index].substring(0, subIndex)}
        <span style={{ opacity: blink ? 1 : 0 }}>|</span>
      </h2>
    );
  }

  /* ─── CV Download ─── */
  const handleDownload = () => {
    toast.success('CV Downloaded Successfully....', {
      duration: 3000,
      style: { background: '#fa5f01', color: 'black', fontWeight: 'bolder' },
    });
  };

  /* ─── Contact Form ─── */
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formLoading, setFormLoading] = useState(false);
  const handleFormChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  /*
   * ════════════════════════════════════════════════════
   *  EMAILJS SETUP — 3 easy steps
   * ────────────────────────────────────────────────────
   *  1. npm install @emailjs/browser
   *  2. Go to https://emailjs.com → create free account
   *     • Add Email Service (Gmail)  → copy SERVICE_ID
   *     • Create Template            → copy TEMPLATE_ID
   *       Template params: {{from_name}} {{from_email}} {{subject}} {{message}}
   *     • Account > API Keys         → copy PUBLIC_KEY
   *  3. Replace the 3 strings below, then uncomment the emailjs.send() block
   * ════════════════════════════════════════════════════
   */
 const EMAILJS_SERVICE_ID  = 'service_8cdqfsu';
const EMAILJS_TEMPLATE_ID = 'template_s33fxsf';
const EMAILJS_PUBLIC_KEY  = 'nf1O44vjXVTzM2L94';

  const handleFormSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in required fields!', {
        duration: 3000,
        style: { background: '#1a1a1a', color: '#fa5f01', fontWeight: 'bolder', border: '1px solid #fa5f01' },
      });
      return;
    }
    setFormLoading(true);
    try {
      
       
       
    
       
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name:  formData.name,
            from_email: formData.email,
            subject:    formData.subject || 'Portfolio Contact',
            message:    formData.message,
            to_email:   'su92-bscsm-f23-275@superior.edu.pk',
          },
          EMAILJS_PUBLIC_KEY
        );
       
       

      // TEMPORARY: simulated delay — remove once EmailJS is live
      await new Promise(r => setTimeout(r, 1500));

      toast.success('Message Sent Successfully! 🚀', {
        duration: 4000,
        style: { background: '#fa5f01', color: 'black', fontWeight: 'bolder' },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Failed to send. Please try again.', {
        duration: 3000,
        style: { background: '#1a1a1a', color: '#fa5f01', fontWeight: 'bolder', border: '1px solid #fa5f01' },
      });
    }
    setFormLoading(false);
  };

  /* ══════════════════════════════════════════════════════
     JSX
  ══════════════════════════════════════════════════════ */
  return (
    <>
      {/* GLOBAL STYLES */}
      <style>{`
        /* ✅ ADDED: enables native smooth scroll for anchor href="#id" links */
        html { scroll-behavior: smooth; }

        @keyframes crownPulse {
          0%,100%{filter:brightness(1.08) drop-shadow(0 0 12px #FF9A1A);}
          50%{filter:brightness(1.4) drop-shadow(0 0 32px #FFB347);}
        }
        .best-crown-ever{animation:crownPulse 2.15s ease-in-out infinite;}
        @keyframes ping-slow{0%,100%{transform:scale(1);opacity:.7}50%{transform:scale(1.3);opacity:.4}}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .animate-ping-slow{animation:ping-slow 7s cubic-bezier(0,0,.2,1) infinite;}
        .animate-spin-slow{animation:spin-slow 20s linear infinite;}
        .preserve-3d{transform-style:preserve-3d;}
        @keyframes glowPulse{
          0%,100%{box-shadow:0 0 20px rgba(249,115,22,.4),0 0 60px rgba(249,115,22,.1);}
          50%{box-shadow:0 0 40px rgba(249,115,22,.7),0 0 100px rgba(249,115,22,.2);}
        }
        .glow-card{animation:glowPulse 3s ease-in-out infinite;}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        .shimmer-text{
          background:linear-gradient(90deg,#f97316,#fbbf24,#f97316,#ea580c);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmer 3s linear infinite;
        }
        @keyframes cvPing{0%,100%{transform:scale(1);opacity:.15}50%{transform:scale(1.15);opacity:.3}}
        .animate-cv-ping{animation:cvPing 4s cubic-bezier(0,0,.2,1) infinite;}
      `}</style>

      {/* ═══════════ NAVBAR ═══════════ */}
      <navbar>
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-around'>
          <div className='h-30 w-30 invert'>
            <img src="https://i.pinimg.com/originals/de/8b/7f/de8b7fbfb2aa13430071e5f605eb4f63.png" alt="" />
          </div>
          <div>
            {/* ✅ CHANGED: added onClick handlers — everything else (classes, structure) identical */}
            <ul className='flex gap-5 font-bold text-gray-100 text-xl'>
              {[
                { label: "Home",       id: "home"     },
                { label: "About",      id: "about"    },
                { label: "Services",   id: "services" },
                { label: "Contact us", id: "contact"  },
              ].map(({ label, id }) => (
                <li
                  key={label}
                  className='relative cursor-pointer group'
                  onClick={() => scrollTo(id)}
                >
                  {label}
                  <span className='absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full'></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </navbar>
      <div className='border border-gray-700 md:mt-0 mt-5'></div>

      {/* ═══════════ HERO ═══════════ */}
      {/* ✅ ADDED: id="home" — no other change */}
      <main id="home" className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 mt-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-700/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        <div className='relative z-10 flex flex-col-reverse justify-center items-center md:flex-row md:justify-center gap-12 lg:gap-20 max-w-7xl mx-auto'>
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{duration:.6,ease:"easeOut"}}>
              <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight">
                I AM FASEE KHAN <TypingAnimation />
              </h1>
              <p className="mt-8 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                Passionate React.js Developer and 5th-semester Computer Science student at Stanford University. Expert in React, Next.js, TypeScript, Redux, and the full MERN stack (MongoDB, Express.js, React, Node.js). I build fast, responsive, and scalable full-stack web applications with integrated databases and modern architectures.
              </p>
            </motion.div>
            <div className="w-full max-w-2xl mx-auto mt-12">
              <motion.div initial={{x:-30,opacity:0}} animate={{x:0,opacity:1}} transition={{type:"spring",stiffness:120,damping:20}}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {[
                    { icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5c-2.21 0-4.24-.753-5.84-2.022L12 14z"/></>, label:"Degree", value:"BS-CS" },
                    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>, label:"Email", value:"faseehd7.khan@gmail.com" },
                    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>, label:"Age", value:"22" },
                    { icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></>, label:"Location", value:"Lahore, Pakistan" },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="group flex items-center gap-5 cursor-default">
                      <div className="p-3 rounded-xl border border-orange-500/30 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300">
                        <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                      </div>
                      <div>
                        <p className="text-orange-400 text-sm font-bold tracking-wider">{label}</p>
                        <p className="text-white font-bold text-lg">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/30 rounded-full blur-3xl animate-ping-slow opacity-70" />
            <div className="absolute -inset-8 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -top-6 -right-6 bg-orange-500 text-black font-bold px-7 py-3 rounded-full shadow-2xl text-sm z-10 animate-bounce mt-10">
              AVAILABLE FOR HIRE
            </div>
            <motion.button initial={{scale:0}} animate={{scale:1}}>
              <div className="relative preserve-3d transition-all duration-700 group-hover:[transform:perspective(1000px)_rotateY(-12deg)_rotateX(8deg)_translateZ(80px)]">
                <img src="mynews.jfif" alt="Fasee Khan"
                  className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-orange-500/40 group-hover:border-orange-500 group-hover:shadow-orange-500/60 transition-all duration-700" />
                <div className="absolute inset-0 rounded-3xl border-4 border-orange-500/60 blur-xl animate-spin-slow opacity-60" />
              </div>
            </motion.button>
          </div>
        </div>
      </main>
      <div className='border border-b-gray-700 mt-5'></div>

      {/* ═══════════ CERTIFICATES ═══════════ */}
      {/* ✅ ADDED: id="about" on the wrapping div — no other change */}
      <motion.div id="about" initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{duration:.8,ease:"easeOut"}}>
        <div className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6 mt-4">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-tight md:mr-0 mr-2">MY CERTIFICATE</h1>
              <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
              <p className="mt-10 text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
                Certified by <span className="text-orange-400 font-bold">Stanford University</span> in Artificial Intelligence and Computer Vision & Learning (SVL).<br className="hidden md:block"/>
                Advanced mastery in modern web development with React.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                {src:"cen.jfif",title:"Stanford University",sub:"Artificial Intelligence"},
                {src:"wer.jfif",title:"SVL (STUDENT VOICE LEADER)",sub:"COMMUNCTION"},
                {src:"https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/115/236/971/8A5gBlRXpzodN3oL6n2x19qkE/bd8f725c0176f7387e8b3f6737dc292b73b176a9.png",title:"Advanced React",sub:"Modern Web Development"},
              ].map(c => (
                <div className="group" key={c.title}>
                  <div className="border-4 border-orange-500 rounded-2xl overflow-hidden shadow-2xl bg-gray-950 transition-all duration-500 group-hover:shadow-orange-500/20 group-hover:border-orange-400">
                    <div className="h-80 flex items-center justify-center p-8 bg-white">
                      <img src={c.src} alt={c.title} className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                  <div className="py-6 text-center">
                    <p className="text-2xl font-bold text-orange-400">{c.title}</p>
                    <p className="text-gray-500 mt-1">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-20">
              <a href="https://digitalcredential.stanford.edu/check/90FC8D913BAEB36B11638BE8082492766092A7B5990A67C87B83D4440DF1D6AAUUlRZ1J4Y1kwZ3p6ZEZkc1oySUk0THVwTkQ4YVQrK2o0MHVNU2hubzVRMWp5eWI1" target="_blank" rel="noopener noreferrer">
                <button className="px-12 py-4 bg-orange-500 text-white font-bold text-xl rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-lg">View Credentials</button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div className='border border-b-gray-700'></div>

      {/* ═══════════ SKILLS ═══════════ */}
      {/* ✅ ADDED: id="services" on the wrapping div — no other change */}
      <motion.div id="services" initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{duration:.8,ease:"easeOut"}}>
        <div className="text-center mb-20 mt-10">
          <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-tight">MY SKILLS</h1>
          <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
          <p className="mt-10 text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
            My true current experience in <span className="text-orange-400 font-bold">WEB DEVELOPMENT</span> is mentioned below.<br className="hidden md:block"/>
            Inshallah in 3-4 months i will be a <span className="text-orange-400 font-bold">FULL STACK</span> developer. (MERN STACK)
          </p>
        </div>
        <div className='flex flex-col w-full gap-7 mt-10'>
          {[
            {label:"HTML",pct:"98%",d:0},{label:"CSS",pct:"95%",d:.2},{label:"JAVASCRIPT",pct:"85%",d:.4},
            {label:"TAILWIND",pct:"80%",d:.6},{label:"REACT",pct:"90%",d:.8},{label:"DATABASE",pct:"87%",d:1.0},
            {label:"PYTHON",pct:"70%",d:1.2},{label:"GITHUB | DEPLOY",pct:"80%",d:1.4},
          ].map(({label,pct,d}) => (
            <div key={label} className='flex justify-center items-center flex-col w-full'>
              <h1 className='text-orange-500 flex w-[70%] justify-start font-bold text-2xl'>{label}</h1>
              <div className='bg-gray-700 w-[70%] h-4 rounded-full mt-3 overflow-hidden relative'>
                <motion.div className='bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full'
                  initial={{width:0}} whileInView={{width:pct}} viewport={{once:true}} transition={{duration:2,delay:d,ease:"easeOut"}} />
              </div>
              <h1 className='text-orange-500 flex w-[70%] justify-end font-bold text-2xl mt-2'>{pct}</h1>
            </div>
          ))}
        </div>
      </motion.div>
      <div className='border border-b-gray-700 mt-10'></div>

      {/* ═══════════ MY JOURNEY (UPDATED) ═══════════ */}
      <motion.div initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{duration:.8,ease:"easeOut"}}>
        <div className="text-center mb-20 mt-10">
          <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-tight">MY JOURNEY</h1>
          <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
          <p className="mt-10 text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
            Currently, I am a student at <span className="text-orange-400 font-bold">SUPERIOR UNIVERSTY</span> in BS-CS Computer Science.<br className="hidden md:block"/>
            LEARNING FULL-STACK WEB DEVELOPMENT. (MERN STACK)
          </p>
        </div>
        <div className="max-w-7xl mx-auto my-20 px-4">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-gray-800 hidden md:block"></div>
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-orange-500 to-transparent hidden md:block"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800 md:hidden"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-3/4 bg-gradient-to-b from-orange-500 to-transparent md:hidden"></div>

            <div className="relative flex flex-col md:flex-row justify-between items-center gap-16 md:gap-4">

              {/* 2022 */}
              <div className="flex flex-col items-center text-center w-full md:w-auto">
                <div className="relative z-10 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-xl font-black text-black mb-4 shadow-lg shadow-orange-500/30">2022</div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">Started Learning</p>
                <p className="text-orange-400 font-bold">HTML, CSS, JS</p>
              </div>

              {/* React Dev */}
              <div className="flex flex-col items-center text-center w-full md:w-auto">
                <div className="relative z-10 w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-3xl mb-4 shadow-xl shadow-orange-600/40 border-4 border-orange-500">⚛</div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">2023 – 2024</p>
                <p className="text-orange-400 font-bold text-lg">React Dev | Stanford</p>
                <p className="text-gray-400 text-sm">20+ Projects | Teaching</p>
              </div>

              {/* BSCS */}
              <div className="flex flex-col items-center text-center w-full md:w-auto">
                <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-4xl font-black text-black mb-4 shadow-2xl animate-pulse">
                  <span className="absolute inset-0 rounded-full border-4 border-orange-400 animate-ping"></span>
                  <span className="relative z-20">🎓</span>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">2025 – Present</p>
                <p className="text-orange-400 font-bold text-xl">BS Computer Science</p>
                <p className="text-orange-300 font-bold">Superior University</p>
                <span className="mt-1 px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-xs font-bold">BSCS In Progress</span>
              </div>

              {/* 1 Year MERN */}
              <div className="flex flex-col items-center text-center w-full md:w-auto">
                <div className="relative z-10 w-20 h-20 bg-gray-900 border-2 border-orange-500 rounded-full flex items-center justify-center mb-4 shadow-xl shadow-orange-500/20">
                  <span className="absolute inset-0 rounded-full border-2 border-orange-500 animate-ping opacity-40"></span>
                  <span className="relative z-20 text-orange-400 font-black text-xs leading-tight">1 YR<br/>MERN</span>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">Target – 2025</p>
                <p className="text-orange-400 font-bold text-lg">1 Year of MERN Stack</p>
                <p className="text-gray-400 text-sm">Full-Stack Mastery</p>
              </div>

              {/* 2 Years MERN */}
              <div className="flex flex-col items-center text-center w-full md:w-auto">
                <div className="relative z-10 w-20 h-20 bg-gray-900 border-2 border-dashed border-orange-400 rounded-full flex items-center justify-center mb-4">
                  <span className="absolute inset-0 rounded-full border-2 border-orange-400 animate-ping opacity-25"></span>
                  <span className="relative z-20 text-orange-400 font-black text-xs leading-tight">2 YRS<br/>MERN</span>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">Future – 2026</p>
                <p className="text-orange-400 font-bold text-lg">2 Years of MERN Stack</p>
                <p className="text-gray-400 text-sm">Building the Next Big Thing</p>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
      <div className='border border-b-gray-700 mt-10'></div>

      {/* ═══════════════════════════════════════════════
          MY PROJECTS  — full new structure
      ═══════════════════════════════════════════════ */}
      {/* ✅ ADDED: id="projects" on the wrapping motion.div — no other change */}
      <motion.div id="projects" initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.05}} transition={{duration:.8,ease:"easeOut"}}>

        <SectionHeading
          title="MY PROJECTS"
          subtitle={<>THESE ARE MY <span className="text-orange-400 font-bold">BEST PRODUCTION GRADE WORKING PROJECTS</span>.</>}
        />

        {/* ──────────────────────────────────────
            SUBSECTION 1 — PRODUCTION GRADE
        ────────────────────────────────────── */}
        <SubHeading title="PRODUCTION GRADE PROJECTS" />

        {/* ── KLEENORA ── */}
        <div className="w-full flex justify-center -mb-20 md:-mb-24 z-30 pointer-events-none">
          <CrownIcon size={200} />
        </div>
        <div className='flex w-full justify-center px-4 py-8 md:py-12'>
          <div className='w-full max-w-5xl sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[48%] h-auto min-h-[600px] border-3 border-orange-500 rounded-xl mt-6 relative overflow-hidden group shadow-2xl transition-all duration-300 hover:shadow-orange-500/30'>
            <div className='h-full w-full bg-black relative flex flex-col items-center pb-10 pt-16 md:pt-20'>
              <img className='object-contain w-full max-h-96 pt-6 px-3 md:pt-8 md:px-10' src="myer.jfif" alt="Kleenora" />
              <LiveBadge />
              <div className="px-6 mt-6 md:mt-8 w-full text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">KLEENORA</h1>
                <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
              </div>
              <p className='text-gray-400 font-bold text-center px-6 sm:px-10 md:px-16 mt-8 leading-relaxed text-base md:text-xl'>
                This project represents my production-grade e-commerce codebase, built with clean architecture, scalable components, and optimized UI/UX. Every element—from product cards to animations and API integration—is designed for real-world performance. The layout is fully responsive, lightweight, and written with professional coding standards that match modern enterprise-level applications.
              </p>
              <TechTags tags={["React","Tailwind","Node.js","MongoDB","Vite"]} />
              <ProjectButtons liveUrl="https://kleenora.store" githubUrl="https://github.com/faseekhan575" />
            </div>
            <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-orange-500 to-orange-700 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 origin-left"></div>
          </div>
        </div>

       {/* ── SS SAFETY SOLUTIONS ── */}
<div className="w-full flex justify-center mt-12 -mb-20 md:-mb-24 z-30 pointer-events-none">
  <CrownIcon size={200} />
</div>

<div className='flex w-full justify-center px-4 py-8 md:py-12'>
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .1 }}
    transition={{ duration: .8, ease: "easeOut" }}
    className='w-full max-w-5xl sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[56%] border-2 border-orange-500 rounded-2xl mt-6 relative overflow-hidden group glow-card transition-all duration-300'
  >
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 pointer-events-none z-0"></div>

    <div className='relative z-10 bg-black flex flex-col items-center pb-12 pt-10'>
      
      <div className="absolute top-5 left-5 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-black px-4 py-1.5 rounded-full text-xs tracking-widest z-20 shadow-lg">
        ⭐ FEATURED
      </div>

      <LiveBadge />

      <div className="w-full px-6 md:px-12 mt-10">
        <img
          src="/ss-saftey.jpeg"
          alt="SS Safety Solutions"
          className="w-full rounded-2xl border border-orange-500/20 shadow-2xl object-cover"
        />
      </div>

      <div className="px-6 mt-8 w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold shimmer-text">
          SS SAFETY SOLUTIONS
        </h1>

        <div className="mt-3 h-1 w-40 mx-auto bg-gradient-to-r from-orange-500 to-orange-700 rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-8 px-6">
        {[
          ["1100+", "Products"],
          ["React", "Frontend"],
          ["Full-Stack", "Architecture"],
          ["Production", "Deployed"]
        ].map(([v, l]) => (
          <div
            key={l}
            className="flex flex-col items-center bg-gray-900 border border-orange-500/30 rounded-xl px-6 py-4 hover:border-orange-500 transition-all duration-300"
          >
            <span className="text-orange-400 font-black text-2xl">
              {v}
            </span>

            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">
              {l}
            </span>
          </div>
        ))}
      </div>

      <p className='text-gray-400 font-bold text-center px-6 sm:px-10 md:px-16 mt-8 leading-relaxed text-base md:text-lg'>
        A real-world production-grade e-commerce platform managing{" "}
        <span className="text-orange-400 font-bold">
          1100+ products
        </span>{" "}
        with a scalable frontend architecture built using React and full-stack technologies.
        Designed for real business operations with optimized performance,
        structured product management, and production deployment practices.
      </p>

      <TechTags
        tags={[
          "React",
          "Tailwind",
          "Node.js",
          "MongoDB",
          "Express.js",
          "Vite"
        ]}
      />

      <ProjectButtons
        liveUrl="https://sssafetysolutions.pk"
        githubUrl="https://github.com/faseekhan575/saftey.solutions"
      />
    </div>

    <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-orange-500 to-orange-700 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 origin-left"></div>
  </motion.div>
</div>

        {/* ──────────────────────────────────────
            SUBSECTION 2 — MERN STACK BEST
        ────────────────────────────────────── */}
        <div className='border border-b-gray-700 mt-10'></div>
        <SubHeading title="MERN STACK BEST PROJECTS" />

        <div className="flex flex-col lg:flex-row gap-10 justify-center px-6 max-w-7xl mx-auto mt-4 mb-12">

          {/* FaseehVision */}
          <motion.div
            initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.05}} transition={{duration:.8,ease:"easeOut"}}
            className="relative w-full lg:w-1/2 flex flex-col"
          >
            <div className="flex justify-center -mb-14 z-30 pointer-events-none"><CrownIcon size={160} /></div>
            <div className="relative bg-black border-2 border-orange-500 rounded-2xl overflow-hidden group glow-card flex flex-col flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent pointer-events-none z-0"></div>
              <div className="relative z-10 flex flex-col flex-1 p-6 md:p-8">
                <div className="absolute top-5 left-5 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-black px-4 py-1.5 rounded-full text-xs tracking-widest shadow-lg z-20">⭐ FEATURED</div>
                <LiveBadge />
                <div className="mt-10 w-full">
                  <img src="/faseehvision - Copy.jpeg" alt="FaseehVision" className="w-full rounded-2xl border border-orange-500/20 shadow-2xl object-cover" />
                </div>
                <div className="mt-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold shimmer-text">FASEEHVISION</h2>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-1">YouTube MERN Platform</p>
                  <div className="mt-3 h-1 w-28 mx-auto bg-orange-500 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-center leading-relaxed mt-6 text-sm md:text-base">
                  A full MERN-stack YouTube-inspired platform where users can upload videos, authenticate using Google APIs, manage content, and experience real-world scalable architecture. Includes <span className="text-orange-400 font-bold">Cloudinary integration</span>, responsive UI, API handling, authentication systems, and Progressive Web App (PWA) support.
                </p>
                <TechTags tags={["MongoDB","Express.js","React","Node.js","Cloudinary","PWA","Google Auth"]} />
                <div className="mt-auto pt-8">
                  <ProjectButtons liveUrl="https://faseehvision.netlify.app/" githubUrl="https://github.com/faseekhan575/the-front-end/tree/main/youtube-frontend" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-orange-500 to-orange-700 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 origin-left"></div>
            </div>
          </motion.div>

          {/* Vault */}
          <motion.div
            initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.05}} transition={{duration:.8,delay:.15,ease:"easeOut"}}
            className="relative w-full lg:w-1/2 flex flex-col"
          >
            <div className="h-0 lg:h-14 pointer-events-none"></div>
            <div className="relative bg-black border-2 border-orange-500/70 rounded-2xl overflow-hidden group hover:border-orange-500 transition-all duration-500 flex flex-col flex-1">
              <div className="relative z-10 flex flex-col flex-1 p-6 md:p-8">
                <LiveBadge />
                <div className="mt-10 w-full">
                  <img src="/valut.jpeg" alt="Vault" className="w-full rounded-2xl border border-orange-500/20 shadow-2xl object-cover" />
                </div>
                <div className="mt-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">VAULT</h2>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-1">E-Commerce MERN Platform</p>
                  <div className="mt-3 h-1 w-28 mx-auto bg-orange-500 rounded-full"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-5">
                  {["Super Admin","Admin Panel","User Panel"].map(r => (
                    <span key={r} className="px-4 py-1.5 border border-orange-500/50 text-orange-400 rounded-full text-xs font-bold hover:bg-orange-500/10 transition">{r}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-center leading-relaxed mt-6 text-sm md:text-base">
                  A complete full-stack MERN e-commerce platform with <span className="text-orange-400 font-bold">Super Admin, Admin, and User panels</span>, advanced backend architecture, authentication systems, pagination, scalable APIs, dashboard management, and production-level practices using MongoDB, Express.js, React, Node.js, and Mongoose.
                </p>
                <TechTags tags={["MongoDB","Express.js","React","Node.js","Mongoose","JWT","Tailwind"]} />
                <div className="mt-auto pt-8">
                  <ProjectButtons liveUrl="https://vault-by-fasee.netlify.app" githubUrl="https://github.com/faseekhan575/e-commrace" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-orange-500 to-orange-700 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 origin-left"></div>
            </div>
          </motion.div>
        </div>

        {/* ──────────────────────────────────────
            SUBSECTION 3 — ADVANCED REACT / DB (Swiper — unchanged)
        ────────────────────────────────────── */}
        <div className='border border-b-gray-700'></div>
        <SubHeading title="ADVANCED REACT | DB PROJECTS" />

        <motion.div initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.05}} transition={{duration:.8,ease:"easeOut"}}>
          <Swiper
            modules={[Navigation,Pagination,Scrollbar,A11y,Autoplay]}
            slidesPerView={2} slidesPerGroup={1} spaceBetween={20}
            loop={true} centeredSlides={false}
            className="w-full max-w-6xl ml-10"
            pagination={{
              clickable:true, el:'.custom-pagination',
              renderBullet:(index,className) => `<span class="${className} inline-block px-4 py-2 bg-orange-500 text-white rounded-full mx-5 text-sm font-bold shadow-lg hover:bg-orange-600 hover:scale-110 transition-all duration-300">${index+1}</span>`,
            }}
            scrollbar={{draggable:true}}
            autoplay={{delay:3000,disableOnInteraction:false}}
            breakpoints={{0:{slidesPerView:1,slidesPerGroup:1},640:{slidesPerView:2,slidesPerGroup:1}}}
          >
            {/* Slide: WhatsApp Clone */}
            <SwiperSlide>
              <div className='h-[540px] w-full max-w-[500px] border-orange-500 border-2 rounded-xl'>
                <div className='h-[250px] w-full md:px-4 px-8'>
                  <img src="img-2.jfif" alt="" />
                  <h1 className='text-orange-500 font-bold text-xl mt-4 text-center'>WHATSAPP-CLONE</h1>
                  <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
                  <p className='text-gray-500 font-bold mt-4 text-center px-3'>Full stack project — login, signup, profile setup and one-to-one chat.</p>
                  <div className="flex flex-wrap justify-center mt-6 gap-3 px-5">
                    {["React","Tailwind","APP-WRITE","REDUX","Vite"].map(tag => (
                      <span key={tag} className="px-2 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-xl text-sm font-semibold tracking-wide shadow-[0_0_10px_rgba(255,140,0,0.35)] hover:scale-105 transition-all cursor-default">{tag}</span>
                    ))}
                  </div>
                  <div className='flex justify-between mt-4'>
                    <a href="https://wechat-c.netlify.app" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-black text-2xl tracking-wide flex items-center gap-3 relative">
                      <span className="relative">Live Demo<span className="absolute -inset-1 bg-orange-500 rounded-full opacity-30 blur-md animate-ping"></span><span className="absolute inset-0 text-orange-300 animate-pulse">Live Demo</span></span>
                      <span className="text-4xl ml-1 animate-bounce">→</span>
                    </a>
                    <a href="https://github.com/faseekhan575" target="_blank" rel="noopener noreferrer" className="bg-black/80 p-4 rounded-full hover:bg-black transition">
                      <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide: Nike Clone */}
            <SwiperSlide>
              <div className='h-[540px] w-full max-w-[500px] border-orange-500 border-2 rounded-xl'>
                <div className='h-[250px] w-full md:px-4 px-8'>
                  <img src="img-3.jfif" alt="" />
                  <h1 className='text-orange-500 font-bold text-xl mt-4 text-center'>NIKE-CLONE</h1>
                  <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
                  <p className='text-gray-500 font-bold mt-4 text-center px-3'>Nike e-commerce clone — product listings, cart, checkout and order history.</p>
                  <div className="flex flex-wrap justify-center mt-6 gap-3 px-5">
                    {["React","Tailwind","APP-WRITE","REDUX","Vite"].map(tag => (
                      <span key={tag} className="px-2 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-xl text-sm font-semibold tracking-wide shadow-[0_0_10px_rgba(255,140,0,0.35)] hover:scale-105 transition-all cursor-default">{tag}</span>
                    ))}
                  </div>
                  <div className='flex justify-between mt-4'>
                    <a href="https://nike-clone-1.netlify.app" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-black text-2xl tracking-wide flex items-center gap-3 relative">
                      <span className="relative">Live Demo<span className="absolute -inset-1 bg-orange-500 rounded-full opacity-30 blur-md animate-ping"></span><span className="absolute inset-0 text-orange-300 animate-pulse">Live Demo</span></span>
                      <span className="text-4xl ml-1 animate-bounce">→</span>
                    </a>
                    <a href="https://github.com/faseekhan575" target="_blank" rel="noopener noreferrer" className="bg-black/80 p-4 rounded-full hover:bg-black transition">
                      <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide: X Clone */}
            <SwiperSlide>
              <div className='h-[540px] w-full max-w-[500px] border-orange-500 border-2 rounded-xl'>
                <div className='h-[250px] w-full md:px-4 px-8'>
                  <img src="img-1.jfif" alt="" />
                  <h1 className='text-orange-500 font-bold text-xl mt-4 text-center'>X-CLONE</h1>
                  <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
                  <p className='text-gray-500 font-bold mt-4 text-center px-3'>Clone of X (Twitter) social — advanced React and Tailwind, deployed on Vercel.</p>
                  <div className="flex flex-wrap justify-center mt-6 gap-3 px-5">
                    {["React","Tailwind","APP-WRITE","Vite"].map(tag => (
                      <span key={tag} className="px-2 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-xl text-sm font-semibold tracking-wide shadow-[0_0_10px_rgba(255,140,0,0.35)] hover:scale-105 transition-all cursor-default">{tag}</span>
                    ))}
                  </div>
                  <div className='flex justify-between mt-4'>
                    <a href="https://x-cloness.netlify.app" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-black text-2xl tracking-wide flex items-center gap-3 relative">
                      <span className="relative">Live Demo<span className="absolute -inset-1 bg-orange-500 rounded-full opacity-30 blur-md animate-ping"></span><span className="absolute inset-0 text-orange-300 animate-pulse">Live Demo</span></span>
                      <span className="text-4xl ml-1 animate-bounce">→</span>
                    </a>
                    <a href="https://github.com/faseekhan575" target="_blank" rel="noopener noreferrer" className="bg-black/80 p-4 rounded-full hover:bg-black transition">
                      <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide: Keyboard Tester */}
            <SwiperSlide>
              <div className='h-[540px] w-full max-w-[500px] border-orange-500 border-2 rounded-xl'>
                <div className='h-[250px] w-full md:px-4 px-8'>
                  <img src="img-4.jfif" alt="" />
                  <h1 className='text-orange-500 font-bold text-xl mt-4 text-center'>KEY-BOARD TESTER</h1>
                  <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
                  <p className='text-gray-500 font-bold mt-4 text-center px-3'>Keyboard tester app — live keypress visualization, latency stats, customizable layouts and results.</p>
                  <div className="flex flex-wrap justify-center mt-6 gap-3 px-5">
                    {["HTML","CSS","J-S"].map(tag => (
                      <span key={tag} className="px-2 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-xl text-sm font-semibold tracking-wide shadow-[0_0_10px_rgba(255,140,0,0.35)] hover:scale-105 transition-all cursor-default">{tag}</span>
                    ))}
                  </div>
                  <div className='flex justify-between mt-4'>
                    <a href="https://fasee-keyboard.netlify.app" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-black text-2xl tracking-wide flex items-center gap-3 relative">
                      <span className="relative">Live Demo<span className="absolute -inset-1 bg-orange-500 rounded-full opacity-30 blur-md animate-ping"></span><span className="absolute inset-0 text-orange-300 animate-pulse">Live Demo</span></span>
                      <span className="text-4xl ml-1 animate-bounce">→</span>
                    </a>
                    <a href="https://github.com/faseekhan575" target="_blank" rel="noopener noreferrer" className="bg-black/80 p-4 rounded-full hover:bg-black transition">
                      <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="custom-pagination mt-15 flex justify-center space-x-4 mb-10 gap-10"></div>
          </Swiper>
        </motion.div>
      </motion.div>

      <div className='border border-b-gray-700 mt-6'></div>

      {/* ═══════════ CONTACT ═══════════ */}
      {/* ✅ ADDED: id="contact" on the wrapping motion.div — no other change */}
      <motion.div id="contact" initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{duration:.8,ease:"easeOut"}}>
        <SectionHeading
          title="CONTACT_ME"
          subtitle={<>CONTACT ME TO MAKE FULL STACK PROJECTS. OR <span className="text-orange-400 font-bold">BUSINESS START-UP OR WEBSITE FOR YOUR BUSINESS</span>.</>}
        />
        <div className="relative w-full">
          <img className="w-full h-full opacity-14 absolute inset-0 object-contain pointer-events-none" src="myes.jfif" alt="" />
          <div className="relative z-10 w-full flex flex-col items-center pt-6 pb-24 px-4">
            <p className="text-xl text-gray-200 mt-4 text-center">
              Drop A Message! Let's <span className="text-orange-500 font-semibold">Work</span> Together
            </p>

          

            <div className="w-full max-w-2xl mt-10">
              <label className="block text-gray-300 text-lg mb-1">Name <span className="text-orange-500">*</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Your full name"
                className="w-full border-b-2 border-orange-500 focus:border-orange-400 outline-none py-2 mb-6 text-lg bg-transparent text-white placeholder-gray-600 transition-colors" />

              <label className="block text-gray-300 text-lg mb-1">Email <span className="text-orange-500">*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="your@email.com"
                className="w-full border-b-2 border-orange-500 focus:border-orange-400 outline-none py-2 mb-6 text-lg bg-transparent text-white placeholder-gray-600 transition-colors" />

              <label className="block text-gray-300 text-lg mb-1">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleFormChange} placeholder="Project / Hire / Collaboration"
                className="w-full border-b-2 border-orange-500 focus:border-orange-400 outline-none py-2 mb-6 text-lg bg-transparent text-white placeholder-gray-600 transition-colors" />

              <label className="block text-gray-300 text-lg mb-1">Message <span className="text-orange-500">*</span></label>
              <textarea rows="5" name="message" value={formData.message} onChange={handleFormChange} placeholder="Tell me about your project..."
                className="w-full border-2 border-orange-500 focus:border-orange-400 outline-none rounded-xl p-4 text-lg bg-transparent text-white placeholder-gray-600 transition-colors resize-none"></textarea>

              <div className="w-full flex justify-center mt-10">
                <button onClick={handleFormSubmit} disabled={formLoading}
                  className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-800 disabled:cursor-not-allowed transition text-white px-12 py-4 rounded-xl text-lg font-bold shadow-md flex items-center gap-3 min-w-[200px] justify-center">
                  {formLoading ? (
                    <><svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Sending...</>
                  ) : "Send Message →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className='border border-b-gray-700'></div>

      {/* ═══════════ FOOTER ═══════════ */}
      <motion.div initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{duration:.8,ease:"easeOut"}}>
        <footer className="bg-black text-gray-400 py-5 mt-15">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            {/* ✅ CHANGED: href now uses the same IDs; onClick calls scrollTo for React-controlled smooth scroll.
                Everything else (classes, structure, map pattern) is identical. */}
            <div className="w-full max-w-2xl flex justify-center gap-10 mb-10 text-sm font-medium">
              {[
                { label: "Home",    id: "home"     },
                { label: "About",   id: "about"    },
                { label: "Projects",id: "projects" },
                { label: "Contact", id: "contact"  },
              ].map(({ label, id }) => (
                <a
                  key={label}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  className="relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <div className="flex gap-8 mb-8">
              <a href="https://github.com/faseekhan575" target="_blank" className="hover:text-orange-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/faseeh-khan-4360382aa" target="_blank" className="hover:text-orange-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:su92-bscsm-f23-275@superior.edu.pk" className="hover:text-orange-500 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} FASEE KHAN. All rights reserved.</p>
          </div>
        </footer>
      </motion.div>

      {/* ═══════════ FLOATING CV BUTTON ═══════════ */}
      <div className="fixed bottom-5 left-4 md:left-8 z-50">
        <a onClick={handleDownload} href="FASEE-KHAN-CV1.pdf" download
          className="group relative flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 bg-orange-600 text-white font-bold text-base md:text-lg rounded-full shadow-2xl transition-all duration-300 hover:bg-orange-500 hover:scale-110">
          <span className="relative z-10">Download CV</span>
          <svg className="w-5 h-5 md:w-6 md:h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <div className="absolute inset-0 rounded-full bg-orange-500 opacity-30 blur-xl scale-0 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute inset-0 rounded-full bg-orange-400 opacity-15 blur-md animate-cv-ping"></div>
          <div className="absolute -inset-2 rounded-full bg-orange-600 opacity-20 blur-2xl"></div>
        </a>
      </div>
    </>
  );
}

export default App