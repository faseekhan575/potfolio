import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { motion } from "motion/react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';










function App() {
  function TypingAnimation() {
    const phrases = ["WEB DEVELOPER", "REACT DEVELOPER", "STANFORD INSTUCTOR"];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
      const blinkInterval = setInterval(() => {
        setBlink((prev) => !prev);
      }, 500);
      return () => clearInterval(blinkInterval);
    }, []);

    useEffect(() => {
      if (subIndex === phrases[index].length + 1 && !isDeleting) {
        const timeout = setTimeout(() => setIsDeleting(true), 1200);
        return () => clearTimeout(timeout);
      }

      if (subIndex === 0 && isDeleting) {
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }, 300);
        return () => clearTimeout(timeout);
      }

      const speed = isDeleting ? 60 : 120;

      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, speed);

      return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting]);

    return (
      <h2 className="text-4xl font-bold text-orange-500 flex justify-end items-center">
        {phrases[index].substring(0, subIndex)}
        <span style={{ opacity: blink ? 1 : 0 }}>|</span>
      </h2>
    );
  }

  return (
    <>
      <navbar>
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-around'>
          <div className='h-30 w-30 invert'>
            <img src="https://i.pinimg.com/originals/de/8b/7f/de8b7fbfb2aa13430071e5f605eb4f63.png" alt="" />
          </div>
          <div className='bg-red'>
            <ul className='flex gap-5 font-bold text-gray-100 text-xl'>
              {["Home", "About", "Services", "Contact us"].map((item) => (
                <li key={item} className='relative cursor-pointer group'>
                  {item}
                  <span className='absolute bottom-0 left-0 w-0 h-1  bg-orange-500 transition-all group-hover:w-full'></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </navbar>

      <div className='border border-gray-700 md:mt-0 mt-5'></div>

      <main className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 mt-10">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-700/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className='relative z-10 flex flex-col-reverse justify-center items-center md:flex-row md:justify-center gap-12 lg:gap-20 max-w-7xl mx-auto'>




          <div className="md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-6xl leading-tight">
                I AM FASEE KHAN <TypingAnimation />
              </h1>

              <div className="mt-8">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                  Passionate React.js Developer and 5th-semester Computer Science student at Stanford University. Expert in React, Next.js, TypeScript, Redux, and the full MERN stack (MongoDB, Express.js, React, Node.js). I build fast, responsive, and scalable full-stack web applications with integrated databases and modern architectures. Strong logical thinking, clean code practices, and excellent public speaking skills enable me to deliver professional, business-growing websites and digital solutions.
                </p>
              </div>
            </motion.div>
            <div>



              <div className="w-full max-w-2xl mx-auto mt-12">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}   // start slightly to the left
                  animate={{ x: 0, opacity: 1 }}     // move to original position
                  transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.6 }}
                >
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                      <div className="group flex items-center gap-5 cursor-default">
                        <div className="p-3 rounded-xl border border-orange-500/30 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300">
                          <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5c-2.21 0-4.24-.753-5.84-2.022L12 14z" />
                          </svg>
                        </div>


                        <div>
                          <p className="text-orange-400 text-sm font-bold tracking-wider">Degree</p>
                          <p className="text-white font-bold text-lg">BS-CS</p>
                        </div>
                      </div>

                      <div className="group flex items-center gap-5 cursor-default">
                        <div className="p-3 rounded-xl border border-orange-500/30 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300">
                          <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-orange-400 text-sm font-bold ">Email</p>
                          <p className="text-white font-bold text-lg">faseehd7.khan@gmail.com</p>
                        </div>
                      </div>

                      <div className="group flex items-center gap-5 cursor-default">
                        <div className="p-3 rounded-xl border border-orange-500/30 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300">
                          <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-orange-400 text-sm font-bold tracking-wider">Age</p>
                          <p className="text-white font-bold text-lg">22</p>
                        </div>
                      </div>

                      <div className="group flex items-center gap-5 cursor-default">
                        <div className="p-3 rounded-xl border border-orange-500/30 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300">
                          <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-orange-400 text-sm font-bold tracking-wider">Location</p>
                          <p className="text-white font-bold text-lg">Lahore, Pakistan</p>
                        </div>
                      </div>


                    </div>
                  </div>
                </motion.div>


              </div>
            </div>
          </div>


          <div className="relative group">

            <div className="absolute -inset-4 bg-orange-500/30 rounded-full blur-3xl animate-ping-slow opacity-70" />
            <div className="absolute -inset-8 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />


            <div className="absolute -top-6 -right-6 bg-orange-500 text-black font-bold px-7 py-3 rounded-full shadow-2xl text-sm z-10 animate-bounce mt-10">
              AVAILABLE FOR HIRE
            </div>

            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} >  <div className="relative preserve-3d transition-all duration-700 group-hover:[transform:perspective(1000px)_rotateY(-12deg)_rotateX(8deg)_translateZ(80px)]">
              <img
                src="mynews.jfif"
                alt="Fasee Khan"
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-orange-500/40 
                     group-hover:border-orange-500 group-hover:shadow-orange-500/60 
                     transition-all duration-700"
              />


              <div className="absolute inset-0 rounded-3xl border-4 border-orange-500/60 blur-xl animate-spin-slow opacity-60" />
            </div>
            </motion.button>
          </div>
        </div>


        <style jsx>{`
    @keyframes ping-slow {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.3); opacity: 0.4; }
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-ping-slow { animation: ping-slow 7s cubic-bezier(0, 0, 0.2, 1) infinite; }
    .animate-spin-slow { animation: spin-slow 20s linear infinite; }
    .preserve-3d { transform-style: preserve-3d; }
  `}</style>
      </main>
      <div className='border border-b-gray-700 mt-5'></div>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=""
      >
        <certificate >
          <div className="py-20 bg-black " id=''>
            <div className="max-w-7xl mx-auto px-6 mt-4">


              <div className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-tight md:mr-0 mr-2">
                  MY CERTIFICATE
                </h1>
                <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>

                <p className="mt-10 text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
                  Certified by <span className="text-orange-400 font-bold">Stanford University</span> in
                  Artificial Intelligence and Computer Vision & Learning (SVL).<br className="hidden md:block" />
                  Advanced mastery in modern web development with React.
                </p>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

                <div className="group">
                  <div className="border-4 border-orange-500 rounded-2xl overflow-hidden shadow-2xl bg-gray-950 
                          transition-all duration-500 group-hover:shadow-orange-500/20 group-hover:border-orange-400">
                    <div className="h-80 flex items-center justify-center p-8 bg-white">
                      <img
                        src="cen.jfif"
                        alt="Stanford AI Certificate"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="py-6 text-center">
                    <p className="text-2xl font-bold text-orange-400">Stanford University</p>
                    <p className="text-gray-500 mt-1">Artificial Intelligence</p>
                  </div>
                </div>


                <div className="group">
                  <div className="border-4 border-orange-500 rounded-2xl overflow-hidden shadow-2xl bg-gray-950 
                          transition-all duration-500 group-hover:shadow-orange-500/20 group-hover:border-orange-400">
                    <div className="h-80 flex items-center justify-center p-8 bg-white">
                      <img
                        src="wer.jfif"
                        alt="SVL Certificate"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="py-6 text-center">
                    <p className="text-2xl font-bold text-orange-400">SVL (STUDENT VOICE LEADER)</p>
                    <p className="text-gray-500 mt-1">COMMUNCTION</p>
                  </div>
                </div>


                <div className="group">
                  <div className="border-4 border-orange-500 rounded-2xl overflow-hidden shadow-2xl bg-gray-950 
                          transition-all duration-500 group-hover:shadow-orange-500/20 group-hover:border-orange-400">
                    <div className="h-80 flex items-center justify-center p-8 bg-white">
                      <img
                        src="https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/115/236/971/8A5gBlRXpzodN3oL6n2x19qkE/bd8f725c0176f7387e8b3f6737dc292b73b176a9.png"
                        alt="React Certificate"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="py-6 text-center">
                    <p className="text-2xl font-bold text-orange-400">Advanced React</p>
                    <p className="text-gray-500 mt-1">Modern Web Development</p>
                  </div>
                </div>

              </div>


              <div className="text-center mt-20">
                <a
                  href="https://digitalcredential.stanford.edu/check/90FC8D913BAEB36B11638BE8082492766092A7B5990A67C87B83D4440DF1D6AAUUlRZ1J4Y1kwZ3p6ZEZkc1oySUk0THVwTkQ4YVQrK2o0MHVNU2hubzVRMWp5eWI1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-12 py-4 bg-orange-500 text-white font-bold text-xl rounded-full 
                     hover:bg-orange-600 transition-colors duration-300 shadow-lg">
                    View Credentials
                  </button>
                </a>

              </div>

            </div>
          </div>
        </certificate>
      </motion.div>



      <div className='border border-b-gray-700 '></div>


      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=""
      >

        <experince>
          <div className="text-center mb-20 mt-10">
            <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-tight">
              MY SKILLS
            </h1>
            <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>

            <p className="mt-10 text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
              My true current experince in <span className="text-orange-400 font-bold">WEB DEVELOPMENT</span> in mention below.<br className="hidden md:block" />
              Inshallah in 3-4 months i will be a <span className="text-orange-400 font-bold">FULL STACK</span> developer. (MERN STACK)
            </p>
          </div>

          <div className='flex flex-col w-full gap-7 mt-10'>

          
            <div className='flex justify-center items-center flex-col w-full'>
              <h1 className='text-orange-500 flex w-[70%] justify-start font-bold text-2xl'>HTML</h1>
              <div className='bg-gray-700 w-[70%] h-4 rounded-full mt-3 overflow-hidden relative'>
                <motion.div
                  className='bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </div>
              <h1 className='text-orange-500 flex w-[70%] justify-end font-bold text-2xl mt-2'>98%</h1>
            </div>

           
            <div className='flex justify-center items-center flex-col w-full'>
              <h1 className='text-orange-500 flex w-[70%] justify-start font-bold text-2xl'>CSS</h1>
              <div className='bg-gray-700 w-[70%] h-4 rounded-full mt-3 overflow-hidden relative'>
                <motion.div
                  className='bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                />
              </div>
              <h1 className='text-orange-500 flex w-[70%] justify-end font-bold text-2xl mt-2'>95%</h1>
            </div>

           
            <div className='flex justify-center items-center flex-col w-full'>
              <h1 className='text-orange-500 flex w-[70%] justify-start font-bold text-2xl'>JAVASCRIPT</h1>
              <div className='bg-gray-700 w-[70%] h-4 rounded-full mt-3 overflow-hidden relative'>
                <motion.div
                  className='bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
                />
              </div>
              <h1 className='text-orange-500 flex w-[70%] justify-end font-bold text-2xl mt-2'>85%</h1>
            </div>

            
            <div className='flex justify-center items-center flex-col w-full'>
              <h1 className='text-orange-500 flex w-[70%] justify-start font-bold text-2xl'>TAILWIND</h1>
              <div className='bg-gray-700 w-[70%] h-4 rounded-full mt-3 overflow-hidden relative'>
                <motion.div
                  className='bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
                />
              </div>
              <h1 className='text-orange-500 flex w-[70%] justify-end font-bold text-2xl mt-2'>80%</h1>
            </div>

            
            <div className='flex justify-center items-center flex-col w-full'>
              <h1 className='text-orange-500 flex w-[70%] justify-start font-bold text-2xl'>REACT</h1>
              <div className='bg-gray-700 w-[70%] h-4 rounded-full mt-3 overflow-hidden relative'>
                <motion.div
                  className='bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                />
              </div>
              <h1 className='text-orange-500 flex w-[70%] justify-end font-bold text-2xl mt-2'>90%</h1>
            </div>


            <div className='flex justify-center items-center flex-col w-full'>
              <h1 className='text-orange-500 flex w-[70%] justify-start font-bold text-2xl'>DATABASE</h1>
              <div className='bg-gray-700 w-[70%] h-4 rounded-full mt-3 overflow-hidden relative'>
                <motion.div
                  className='bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: "87%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.0, ease: "easeOut" }}
                />
              </div>
              <h1 className='text-orange-500 flex w-[70%] justify-end font-bold text-2xl mt-2'>87%</h1>
            </div>

           
            <div className='flex justify-center items-center flex-col w-full'>
              <h1 className='text-orange-500 flex w-[70%] justify-start font-bold text-2xl'>PYTHON</h1>
              <div className='bg-gray-700 w-[70%] h-4 rounded-full mt-3 overflow-hidden relative'>
                <motion.div
                  className='bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                />
              </div>
              <h1 className='text-orange-500 flex w-[70%] justify-end font-bold text-2xl mt-2'>70%</h1>
            </div>

            
            <div className='flex justify-center items-center flex-col w-full'>
              <h1 className='text-orange-500 flex w-[70%] justify-start font-bold text-2xl'>GITHUB | DEPLOY</h1>
              <div className='bg-gray-700 w-[70%] h-4 rounded-full mt-3 overflow-hidden relative'>
                <motion.div
                  className='bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.4, ease: "easeOut" }}
                />
              </div>
              <h1 className='text-orange-500 flex w-[70%] justify-end font-bold text-2xl mt-2'>80%</h1>
            </div>

          </div>
        </experince>
      </motion.div>

      <div className='border border-b-gray-700 mt-10'></div>


      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="your-classes-here"
      >
        <journey>
          <div className="text-center mb-20 mt-10">
            <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-tight">
              MY JOURNEY
            </h1>
            <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>

            <p className="mt-10 text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
              Currently, I am a student at <span className="text-orange-400 font-bold">SUPERIOR UNIVERSTY</span> in BS-CS Computer Science.<br className="hidden md:block" />
              LEARNING FULL-SATCK WEB DEVELOPMENT. (MERN STACK)
            </p>
          </div>


          <div className="max-w-6xl mx-auto my-20 px-4">

            <div className="relative">

              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-gray-800 hidden md:block"></div>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-linear-to-r from-orange-500 to-transparent hidden md:block"></div>


              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800 md:hidden"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0 h-3/4 bg-linear-to-b from-orange-500 to-transparent md:hidden"></div>


              <div className="relative flex flex-col md:flex-row justify-between items-center gap-20 md:gap-0">


                <div className="flex flex-col items-center text-center w-full md:w-auto">
                  <div className="relative z-10 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-black text-black mb-4 shadow-lg shadow-orange-500/30">
                    2022
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 text-sm uppercase tracking-wider">Started Learning</p>
                    <p className="text-orange-400 font-bold">HTML, CSS, JS</p>
                  </div>
                </div>


                <div className="flex flex-col items-center text-center w-full md:w-auto">
                  <div className="relative z-10 w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-3xl mb-4 shadow-xl shadow-orange-600/40 border-4 border-orange-500">
                    ⚛
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 text-sm uppercase tracking-wider">2023 - 2024</p>
                    <p className="text-orange-400 font-bold text-lg">React Developer | stanford university</p>
                    <p className="text-gray-400 text-sm">Built 20+ Projects | teaching</p>
                  </div>
                </div>


                <div className="flex flex-col items-center text-center w-full md:w-auto">
                  <div className="relative z-10 w-24 h-24 bg-linear-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-4xl font-black text-black mb-4 shadow-2xl animate-pulse">
                    <span className="absolute inset-0 rounded-full border-4 border-orange-400 animate-ping"></span>
                    <span className="relative z-20">🎓</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 text-sm uppercase tracking-wider">2025 - Present</p>
                    <p className="text-orange-400 font-bold text-xl">BS Computer Science</p>
                    <p className="text-orange-300 font-bold">Superior University</p>
                  </div>
                </div>


                <div className="flex flex-col items-center text-center w-full md:w-auto">
                  <div className="relative z-10 w-16 h-16 bg-gray-800 border-2 border-dashed border-orange-600 rounded-full flex items-center justify-center text-2xl font-black text-orange-600 mb-4">
                    ?
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 text-sm uppercase tracking-wider">Future-26</p>
                    <p className="text-orange-400 font-bold text-lg">Full-Stack MERN Engineer</p>
                    <p className="text-gray-400 text-sm">Building the Next Big Thing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </journey>
      </motion.div>
      <div className='border border-b-gray-700 mt-10'></div>



      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="your-classes-here"
      >
        <div className="text-center mb-20 mt-10">
          <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-tight">
            MY PROJECTS
          </h1>
          <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>

          <p className="mt-10 text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
            THESE ARE ONE OF MY BEST <span className="text-orange-400 font-bold">PRODUCTION GRADE WORKING PROJECTS</span>
            <span className="text-orange-400 font-bold">.</span>
          </p>
        </div>

        {/* === CROWN ONLY FOR KLEENORA – sits perfectly on top === */}
        <div className="w-full flex justify-center -mb-20 md:-mb-28 z-30 pointer-events-none">
          <style jsx>{`
      @keyframes crownPulse {
        0%, 100% { filter: brightness(1.08) drop-shadow(0 0 12px #FF9A1A); }
        50% { filter: brightness(1.4) drop-shadow(0 0 32px #FFB347); }
      }
      .best-crown-ever {
        animation: crownPulse 2.15s ease-in-out infinite;
      }
    `}</style>

          <svg
            width="300"
            height="300"
            viewBox="0 0 200 200"
            className="best-crown-ever drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="orangeGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFD891" />
                <stop offset="45%" stopColor="#FFB347" />
                <stop offset="100%" stopColor="#FF7A1A" />
              </linearGradient>
              <linearGradient id="rubyGlow">
                <stop offset="0%" stopColor="#FF5A5A" />
                <stop offset="100%" stopColor="#CC0000" />
              </linearGradient>
              <radialGradient id="sparkCenter">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>

            <g fill="url(#orangeGold)" stroke="#B94E00" strokeWidth="4">
              <path d="M32,142 L52,70 L82,128 L100,42 L118,128 L148,70 L168,142 L168,164 Q168,186 140,186 L60,186 Q32,186 32,164 Z" />
              <rect x="32" y="142" width="136" height="34" rx="11" />
              <circle cx="58" cy="160" r="11" fill="url(#rubyGlow)" />
              <circle cx="142" cy="160" r="11" fill="url(#rubyGlow)" />
              <circle cx="100" cy="152" r="20" fill="url(#rubyGlow)" stroke="#7A0000" strokeWidth="4" />
            </g>
            <circle cx="70" cy="102" r="6" fill="white" opacity="0.9" />
            <circle cx="130" cy="102" r="6" fill="white" opacity="0.9" />
            <circle cx="100" cy="58" r="8" fill="white" opacity="0.9" />
          </svg>
        </div>

        {/* YOUR ORIGINAL CARD – structure 100% untouched */}
        <div className='flex w-full justify-center px-4 py-8 md:py-12'>
          <div className='w-full max-w-5xl sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[48%] 
                    h-auto min-h-[600px] border-3 border-orange-500 rounded-xl mt-6 
                    relative overflow-hidden group shadow-2xl transition-all duration-300 
                    hover:shadow-orange-500/30'>

            <div className='h-full w-full bg-black relative flex flex-col items-center pb-10 pt-16 md:pt-20'>

              <img
                className='object-contain w-full max-h-96 pt-6 px-3 md:pt-8 md:px-10'
                src="myer.jfif"
                alt="Kleenora"
              />

              <div className='absolute top-5 right-5 bg-orange-500 text-white px-5 py-2 rounded-full text-lg font-bold flex items-center gap-2 shadow-xl z-10'>
                <span className='relative flex h-3 w-3'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-80'></span>
                  <span className='relative inline-flex rounded-full h-3 w-3 bg-green-300'></span>
                </span>
                LIVE
              </div>

              <div className="px-6 mt-6 md:mt-8 w-full text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  KLEENORA
                </h1>
                <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
              </div>

              <p className='text-gray-400 font-bold text-center px-6 sm:px-10 md:px-16 mt-8 leading-relaxed text-base sm:text-l md:text-xl'>
                This project represents my production-grade e-commerce codebase, built with clean architecture, scalable components, and optimized UI/UX. Every element—from product cards to animations and API integration—is designed for real-world performance. The layout is fully responsive, lightweight, and written with professional coding standards that match modern enterprise-level applications.
              </p>

              <div className="flex flex-wrap justify-center mt-10 gap-4 px-6">
                {["React", "Tailwind", "Node.js", "MongoDB", "Vite"].map((tag) => (
                  <span key={tag} className="px-6 py-3 bg-orange-500 text- rounded-full text-base font-bold hover:bg-orange-600 transition shadow-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 w-full px-8">
                <a href="https://kleenora.store" target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-[40%] bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl text-center hover:from-orange-600 hover:to-orange-700 transition shadow-xl text-lg">
                  View Live
                </a>
                <a href="https://github.com/faseekhan575" target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-xl text-center hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg">
                  GitHub
                </a>
              </div>

            </div>

            <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-orange-500 to-orange-700 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 origin-left"></div>
          </div>
        </div>

        <div className="text-center mb-20 mt-10">
          <h1 className="text-5xl md:text-3xl font-black text-orange-500 tracking-tight">
            ADVNACE REACT | DB PROJECTS
          </h1>
          <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
        </div>

      </motion.div>
      <last>




        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="your-classes-here"
        >


          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={20}

            loop={true}
            centeredSlides={false}
            className="w-full max-w-6xl ml-10"
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              renderBullet: (index, className) => {
                return `<span class="${className} 
   inline-block 
      px-4 py-2 
      bg-orange-500 
      text-white 
      rounded-full 
      mx-5
      text-sm 
      font-bold 
      shadow-lg 
      hover:bg-orange-600 
      hover:scale-110 
      transition-all 
      duration-300
      ">${index + 1}</span>`;
              },
            }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              640: { slidesPerView: 2, slidesPerGroup: 1 },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >

            <SwiperSlide>
            

              <div className='h-[540px]  w-full max-w-[500px]  border-orange-500 border-2 rounded-xl '>
                <div className='h-[250px] w-full md:px-4 px-8'>
                  <img src="img-2.jfif" alt="" srcset="" />
                  <h1 className='text-orange-500 font-bold text-xl mt-4 text-center '>WHATSAPP-CLONE</h1>
                  <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
                  <p className='text-gray-500 font-bold mt-4 text-center px-3'>This project is a clone of the popular messaging app WhatsApp. full stack project and you will get login signup than profile setup and onetoone chat.</p>
                  <div className="flex flex-wrap justify-center mt-6 gap-3 px-5">
                    {[
                      "React",
                      "Tailwind",
                      "APP-WRITE",
                      "REDUX",
                      "Vite"
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="
        px-2 py-2
        bg-gradient-to-r from-orange-500 to-orange-600
        text-black
        rounded-xl
        text-sm
        font-semibold
        tracking-wide
        shadow-[0_0_10px_rgba(255,140,0,0.35)]
        hover:shadow-[0_0_14px_rgba(255,160,0,0.55)]
        hover:scale-105
        transition-all
        cursor-default
      "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className='flex justify-between mt-4'>
                    <a
                      href="wechat-c.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 font-black text-2xl tracking-wide flex items-center gap-3 relative"
                    >
                      {/* Blinking Text */}
                      <span className="relative">
                        Live Demo
                        {/* Subtle blinking glow */}
                        <span className="absolute -inset-1 bg-orange-500 rounded-full opacity-30 blur-md animate-ping"></span>
                        {/* Stronger pulse on the text itself */}
                        <span className="absolute inset-0 text-orange-300 animate-pulse">Live Demo</span>
                      </span>

                      {/* Arrow with tiny bounce */}
                      <span className="text-4xl ml-1 animate-bounce">→</span>
                    </a>
                    <a
                      href="https://github.com/faseekhan575"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/80 p-4 rounded-full hover:bg-black transition"
                    >
                      <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div></SwiperSlide>
            <SwiperSlide><div className='h-[540px] w-full max-w-[500px]   border-orange-500 border-2 rounded-xl'>
              <div className='h-[250px] w-full md:px-4 px-8'>
                <img src="img-3.jfif" alt="" srcset="" />
                <h1 className='text-orange-500 font-bold text-xl mt-4 text-center '>NIKE-CLONE</h1>
                <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
                <p className='text-gray-500 font-bold mt-4 text-center px-3'>This project is a clone of the Nike e-commerce site. full stack and you will get product listings cart checkout and history. requires Redux React Appwrite.</p>
                <div className="flex flex-wrap justify-center mt-6 gap-3 px-5">
                  {[
                    "React",
                    "Tailwind",
                    "APP-WRITE",
                    "REDUX",
                    "Vite"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
        px-2 py-2
        bg-gradient-to-r from-orange-500 to-orange-600
        text-black
        rounded-xl
        text-sm
        font-semibold
        tracking-wide
        shadow-[0_0_10px_rgba(255,140,0,0.35)]
        hover:shadow-[0_0_14px_rgba(255,160,0,0.55)]
        hover:scale-105
        transition-all
        cursor-default
      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between mt-4'>
                  <a
                    href="nike-clone-1.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 font-black text-2xl tracking-wide flex items-center gap-3 relative"
                  >
                    {/* Blinking Text */}
                    <span className="relative">
                      Live Demo
                      {/* Subtle blinking glow */}
                      <span className="absolute -inset-1 bg-orange-500 rounded-full opacity-30 blur-md animate-ping"></span>
                      {/* Stronger pulse on the text itself */}
                      <span className="absolute inset-0 text-orange-300 animate-pulse">Live Demo</span>
                    </span>

                    {/* Arrow with tiny bounce */}
                    <span className="text-4xl ml-1 animate-bounce">→</span>
                  </a>
                  <a
                    href="https://github.com/faseekhan575"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/80 p-4 rounded-full hover:bg-black transition"
                  >
                    <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className='h-[540px] w-full max-w-[500px]   border-orange-500 border-2 rounded-xl '>
              <div className='h-[250px] w-full  md:px-4 px-8'>
                <img src="img-1.jfif" alt="" srcset="" />
                <h1 className='text-orange-500 font-bold text-xl mt-4 text-center '>X-CLONE</h1>
                <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
                <p className='text-gray-500 font-bold mt-4 text-center px-3'>his project is a clone of X social. using advanced react and tailwindcss ininlizing i can build the full stack project and deploy it on vercel.</p>
                <div className="flex flex-wrap justify-center mt-6 gap-3 px-5">
                  {[
                    "React",
                    "Tailwind",
                    "APP-WRITE",
                    "Vite"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
        px-2 py-2
        bg-gradient-to-r from-orange-500 to-orange-600
        text-black
        rounded-xl
        text-sm
        font-semibold
        tracking-wide
        shadow-[0_0_10px_rgba(255,140,0,0.35)]
        hover:shadow-[0_0_14px_rgba(255,160,0,0.55)]
        hover:scale-105
        transition-all
        cursor-default
      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between mt-4'>
                  <a
                    href="x-cloness.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 font-black text-2xl tracking-wide flex items-center gap-3 relative"
                  >
                    {/* Blinking Text */}
                    <span className="relative">
                      Live Demo
                      {/* Subtle blinking glow */}
                      <span className="absolute -inset-1 bg-orange-500 rounded-full opacity-30 blur-md animate-ping"></span>
                      {/* Stronger pulse on the text itself */}
                      <span className="absolute inset-0 text-orange-300 animate-pulse">Live Demo</span>
                    </span>

                    {/* Arrow with tiny bounce */}
                    <span className="text-4xl ml-1 animate-bounce">→</span>
                  </a>
                  <a
                    href="https://github.com/faseekhan575"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/80 p-4 rounded-full hover:bg-black transition"
                  >
                    <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className='h-[540px] w-full max-w-[500px]   border-orange-500 border-2 rounded-xl '>
              <div className='h-[250px] w-full md:px-4 px-8'>
                <img src="img-4.jfif" alt="" srcset="" />
                <h1 className='text-orange-500 font-bold text-xl mt-4 text-center '>KEY-BOARD TESTER</h1>
                <div className="mt-2 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>
                <p className='text-gray-500 font-bold mt-4 text-center px-3'>This project is a keyboard tester app. full stack and you will get live keypress visualization latency stats customizable layouts and results. requires Redux React Appwrite</p>
                <div className="flex flex-wrap justify-center mt-6 gap-3 px-5">
                  {[
                    "HTML",
                    "CSS",
                    "J-S"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
        px-2 py-2
        bg-gradient-to-r from-orange-500 to-orange-600
        text-black
        rounded-xl
        text-sm
        font-semibold
        tracking-wide
        shadow-[0_0_10px_rgba(255,140,0,0.35)]
        hover:shadow-[0_0_14px_rgba(255,160,0,0.55)]
        hover:scale-105
        transition-all
        cursor-default
      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between mt-4'>
                  <a
                    href="fasee-keyboard.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 font-black text-2xl tracking-wide flex items-center gap-3 relative"
                  >
                    {/* Blinking Text */}
                    <span className="relative">
                      Live Demo
                      {/* Subtle blinking glow */}
                      <span className="absolute -inset-1 bg-orange-500 rounded-full opacity-30 blur-md animate-ping"></span>
                      {/* Stronger pulse on the text itself */}
                      <span className="absolute inset-0 text-orange-300 animate-pulse">Live Demo</span>
                    </span>

                    {/* Arrow with tiny bounce */}
                    <span className="text-4xl ml-1 animate-bounce">→</span>
                  </a>
                  <a
                    href="https://github.com/faseekhan575"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/80 p-4 rounded-full hover:bg-black transition"
                  >
                    <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>


            </SwiperSlide>

            <div className="custom-pagination  mt-15 flex justify-center space-x-4 mb-10 gap-10"></div>

          </Swiper>
        </motion.div>
  </last>

<div className='border border-b-gray-700 '></div> 

    <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="your-classes-here"
        >
 <div className="text-center mb-20 mt-10">
          <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-tight">
            CONTACT_ME
          </h1>
          <div className="mt-6 h-1 w-32 mx-auto bg-orange-500 rounded-full"></div>

          <p className="mt-10 text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
            CONTACT ME TO MAKE FULL STACK PROJECTS. OR <span className="text-orange-400 font-bold">BUSINESS START-UP OR WEBSITE FOR YOU BUSNIESS</span>
            <span className="text-orange-400 font-bold">.</span>
          </p>
        </div>

       <div className="relative w-full h-full">

  <img
    className="w-full h-full  opacity-14 absolute inset-0 object-contain"
    src="myes.jfif"
    alt=""
  />

 
  <div className="relative z-10 w-full flex flex-col items-center pt-20 pb-24 px-4">

  
    <h1 className="text-5xl font-extrabold text-center text-black tracking-wide">
      <span className="text-orange-500">CONTACT-US</span> 
    </h1>

    
   

    
    <p className="text-xl text-gray-200 mt-8 text-center">
      Drop A Message! Let’s <span className="text-orange-500 font-semibold">Work</span> Together
    </p>

   
    <div className="w-full max-w-2xl mt-12">
      <label className="block text-gray-300 text-lg mb-1">Name:</label>
      <input
        type="text"
        className="w-full border-b-2 border-orange-500 focus:border-orange-500 outline-none py-2 mb-6 text-lg"
      />

      <label className="block text-gray-300 text-lg mb-1">Email:</label>
      <input
        type="email"
        className="w-full border-b-2 border-orange-500 outline-none py-2 mb-6 text-lg"
      />

      <label className="block text-gray-300 text-lg mb-1">Subject:</label>
      <input
        type="text"
        className="w-full border-b-2 border-orange-500 outline-none py-2 mb-6 text-lg"
      />

      <label className="block text-gray-300 text-lg mb-1">Message:</label>
      <textarea
        rows="5"
        className="w-full border-2 border-orange-500 outline-none rounded-xl p-4 text-lg"
      ></textarea>

      <div className="w-full flex justify-center mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-10 py-3 rounded-xl text-lg font-semibold shadow-md flex items-center gap-2">
          Send <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</div>



</motion.div>
  <div className='border border-b-gray-700 '></div> 

  <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="your-classes-here"
        >
          <footer className="bg-black text-gray-400 py-5 mt-15 ">
  <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
    
    
    <div className="w-full max-w-2xl flex justify-center gap-10 mb-10 text-sm font-medium">
      <a href="#home" className="relative group">
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a href="#about" className="relative group">
        About
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a href="#projects" className="relative group">
        Projects
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a href="#contact" className="relative group">
        Contact
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </div>

   
    <div className="flex gap-8 mb-8">
      <a href="https://github.com/faseekhan575" target="_blank" className="hover:text-orange-500 transition">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/faseeh-khan-4360382aa" target="_blank" className="hover:text-orange-500 transition">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a href="su92-bscsm-f23-275@supeior.edu.pk" className="hover:text-orange-500 transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </a>
    </div>

    <p className="text-xs text-gray-600">
      © {new Date().getFullYear()} FASEE KHAN. All rights reserved.
    </p>
  </div>
</footer>
</motion.div>




<div className="fixed bottom-5 left-4 md:left-8 z-50">
  <a
    href="/FaseeKhan_Resume.pdf"   
    download
    className="
      group relative flex items-center gap-3 
      px-6 py-4 md:px-8 md:py-5
      bg-orange-600 text-white font-bold 
      text-base md:text-lg rounded-full shadow-2xl 
      transition-all duration-300 
      hover:bg-orange-500 hover:scale-110
    "
  >
 
    <span className="relative z-10">Download CV</span>

  
    <svg className="w-5 h-5 md:w-6 md:h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>

 
    <div className="absolute inset-0 rounded-full bg-orange-500 opacity-30 blur-xl scale-0 group-hover:scale-110 transition-transform duration-700"></div>

    
    <div className="absolute inset-0 rounded-full bg-orange-400 opacity-15 blur-md animate-ping-slow"></div>

    <div className="absolute -inset-2 rounded-full bg-orange-600 opacity-20 blur-2xl"></div>
  </a>
</div>


<style jsx>{`
  @keyframes ping-slow {
    0%, 100% { transform: scale(1); opacity: 0.15; }
    50% { transform: scale(1.15); opacity: 0.3; }
  }
  .animate-ping-slow {
    animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`}</style>



    

    </>
  )
}

export default App