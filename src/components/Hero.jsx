import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div>
    <section className={`relative w-3xl h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[140px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5  bg-[#915EFF]' />
          <div className='w-1 sm:h-60 h-40 violet-gradient' />
        </div>
        {/* <br><br><br></br></br></br> */}
        <div>
          <p className={`${styles.heroHeadText} mt-8 text-white`}>
          AI-powered Business Manager for <span className='text-[#915EFF]'>CREATORS</span>
          </p><br></br>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
          Focus on doing what you love, instead of having to open 10 different ​social media platforms, negotiate brand deals, chase invoices, ​manage payments, or file taxes.<div className='text-[#915EFF]' />
          <br></br>
          {/* </span> */}

          </p>
          <p className={`${styles.heroSubbText} mt-2 text-white`}>It's like having your own BUSINESS MANAGER !</p><br/><br/>
          <button class="h-10 px-5 text-white-500 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">Get Started</button>
      <br></br>  </div>
      </div>
      
      
      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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
      </div> */}
    </section>
    <br/><br/><br/><br/><br/>
    <div className="nm"><img src="https://www.thecrater.co/static/media/upperimage.d019417cdcd7ec2ad1a8.png"></img></div>
    </div>
  );
};

export default Hero;