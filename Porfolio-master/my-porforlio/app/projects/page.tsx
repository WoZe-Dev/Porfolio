import React from 'react';
import { NavbarDemo } from "@/components/navbar-menu";
import { Github, Globe } from 'lucide-react';
import Footer from "@/components/footer";

function App() {
  return (
    <div className="min-h-screen  bg-white dark:bg-black bg-gray-100">
      <NavbarDemo/>
      <div className="container bg-white dark:bg-black mx-auto px-4 py-8">
        <div className='flex flex-col items-center md:items-start'>
          <h1 className=' dark:text-white h-fit w-fit bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-900/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent dark:from-neutral-300 dark:via-neutral-300/90 dark:to-neutral-300/70'>
            Projects
          </h1>
        </div>
        
        {/* Projects Grid - Main Projects */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Project Card 1 */}
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <img 
                alt="E-commerce Platform" 
                className="h-full w-full object-cover object-top"
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div>
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className=" dark:text-white text-center text-lg font-bold md:text-left">
                    E-commerce Platform
                  </h2>
                </div>
                <p className="text-justify text-sm md:text-left">
                  A full-featured e-commerce platform with React and Node.js, featuring real-time inventory management and secure payment processing.
                </p>
                <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    React
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    Node.js
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    MongoDB
                  </span>
                </div>
              </div>
              <div className="mt-9 flex flex-1 items-end justify-center gap-2">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-blue-700/10 p-2 text-blue-700 hover:bg-blue-700 hover:text-neutral-50 dark:bg-blue-600/5 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-neutral-50"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          

          {/* Project Card 2 */}
          <div className="flex h-full flex-col bg-white dark:bg-black overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <img 
                alt="AI Chat Application" 
                className="h-full w-full object-cover object-top"
                src="https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div>
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className="dark:text-white text-center text-lg font-bold md:text-left">
                    AI Chat Application
                  </h2>
                </div>
                <p className="dark:text-white text-justify text-sm md:text-left">
                  An intelligent chat application powered by AI, featuring real-time translation and sentiment analysis.
                </p>
                <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
                  <span className=" dark:text-white rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    Next.js
                  </span>
                  <span className=" dark:text-white rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    OpenAI
                  </span>
                  <span className=" dark:text-white rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    WebSocket
                  </span>
                </div>
              </div>
              <div className=" mt-9 flex flex-1 items-end justify-center gap-2">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className=" dark:text-white flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-blue-700/10 p-2 text-blue-700 hover:bg-blue-700 hover:text-neutral-50 dark:bg-blue-600/5 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-neutral-50"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="flex h-full flex-col bg-white dark:bg-black overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <img 
                alt="Fitness Tracker" 
                className="h-full w-full object-cover object-top"
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div>
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className=" dark:text-white text-center text-lg font-bold md:text-left">
                    Fitness Tracker
                  </h2>
                </div>
                <p className=" dark:text-white text-justify text-sm md:text-left">
                  A comprehensive fitness tracking application with workout planning, progress monitoring, and social features.
                </p>
                <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    React Native
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    Firebase
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    GraphQL
                  </span>
                </div>
              </div>
              <div className="mt-9 flex flex-1 items-end justify-center gap-2">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-blue-700/10 p-2 text-blue-700 hover:bg-blue-700 hover:text-neutral-50 dark:bg-blue-600/5 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-neutral-50"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="flex h-full bg-white dark:bg-black flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <img 
                alt="Smart Home Dashboard" 
                className="h-full w-full object-cover object-top"
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div>
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className=" dark:text-white text-center text-lg font-bold md:text-left">
                    Smart Home Dashboard
                  </h2>
                </div>
                <p className="dark:text-white text-justify text-sm md:text-left">
                  A modern dashboard for controlling smart home devices with real-time monitoring and automation features.
                </p>
                <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    Vue.js
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    MQTT
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    IoT
                  </span>
                </div>
              </div>
              <div className="mt-9 flex flex-1 items-end justify-center gap-2">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-blue-700/10 p-2 text-blue-700 hover:bg-blue-700 hover:text-neutral-50 dark:bg-blue-600/5 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-neutral-50"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Small Projects Grid */}
      

        {/* More Projects Link */}
        <div className="mt-8 bg-white dark:bg-black flex justify-center md:justify-end">
          <a 
            href="#" 
            target="_blank" 
            className="flex items-end bg-white dark:bg-black gap-px leading-none opacity-70 transition-opacity hover:opacity-100"
          >
            <span>more projects</span>
            <span className="text-lg">→</span>
          </a>
        </div>
        
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;