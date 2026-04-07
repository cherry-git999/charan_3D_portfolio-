import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full flex flex-col md:block md:h-screen mx-auto`}>
      {/* Hero Text - Visible on all screens, positioned absolutely on desktop */}
      <div
        className={`w-full md:absolute md:inset-0 md:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 py-8 md:py-0`}
      >
        <div className='hidden md:flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='w-full md:block'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Charan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* Hero Canvas - Below text on mobile, full screen on desktop */}
      <div className='w-full h-[300px] sm:h-[400px] md:absolute md:inset-0 md:top-0 md:h-full'>
        <ComputersCanvas />
      </div>

      {/* Scroll indicator */}
      <div className='w-full md:absolute flex md:flex justify-center items-center xs:bottom-10 bottom-20 sm:bottom-32 md:bottom-10 py-8 md:py-0'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;