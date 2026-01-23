import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { Process } from "./components/Process";
import { ScrollVideo } from "./components/ScrollProgress";
import { ChatWidget } from "./components/ChatWidget";
import { BookingModal } from "./components/BookingModal";
import { Architecture } from "./components/Architecture";
import { Work } from "./components/Work";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Simulate initial system boot
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div className="bg-[#020202] min-h-screen text-white overflow-x-hidden selection:bg-cyan-500/30">
      <ScrollVideo />

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          >
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-xs font-mono uppercase tracking-[0.4em] text-cyan-500"
            >
              Initializing Aether AI...
            </motion.div>
          </motion.div>
        ) : (
          <main>
            {/* Navigation Overlay */}
            <nav className="fixed top-0 inset-x-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none mix-blend-difference">
              <div className="flex items-center gap-3 pointer-events-auto cursor-pointer">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-black">A</div>
                <span className="font-bold tracking-widest hidden md:block">AETHER AI</span>
              </div>
              <button onClick={() => window.open('https://atherai2026.app.n8n.cloud/form/e7216e1d-645f-4fbc-8df6-5dd4c0318e87', '_blank')} className="pointer-events-auto px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-colors">
                Book Call
              </button>
            </nav>

            <Hero setIsBookingOpen={setIsBookingOpen} />
            <div className="h-20" /> {/* Spacer */}
            <Services />
            <div className="h-20" /> {/* Spacer */}
            {/* Process Section can be added here as a separate component */}
            {/* Process Section */}
            <Process />

            <Architecture />

            <div className="h-20" /> {/* Spacer */}
            <Work />

            <div className="h-20" /> {/* Spacer */}
            <Pricing />
            <Footer />
            <ChatWidget />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
