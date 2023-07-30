import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
     <div className="text-purple-600 font-medium lg:text-[30px] sm:text-[25px] xs:text-[30px] text-[15px] lg:leading-[40px]"> <p>Get all your Platform Data. All in one place.</p></div>
     <br/><br/> <div className='flex flex-row flex-wrap justify-center gap-10'>
    
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
        
      ))}
       </div><br/><br/>
       <div className="text-purple-600 font-medium lg:text-[30px] sm:text-[25px] xs:text-[30px] text-[15px] lg:leading-[40px]"> <p>And Many More...</p></div>
      </div>
       
    
   
  );
};

export default SectionWrapper(Tech, "");