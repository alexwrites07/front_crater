import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.heroSubbText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className={styles.sectionSubText}>Sports Inddex N Tech Private Limited</p>
        <br/><br/>
        <p className={styles.sectionSubText}>14/4, J Block , 3rd Avenue, Anna Nagar ​East, Chennai, Tamil Nadu, 600102</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          </form>
          <br/>
          <div class="flex items-center  w-fit mx-[-0.4rem] lg:mx-auto  my-[5px]"><a rel="noreferrer" target="_blank" href="https://www.instagram.com/crater.ai/"> <img src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/insta_BW.png" class=" lg:w-[40px] w-[34px] h-[34px] lg:h-[40px] mx-[4px] " alt=""/></a><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/the-crater/"><img src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/linkedln_BW.png" class=" rounded lg:w-[35px] w-[30px] h-[30px] lg:h-[35px] mx-[4px] " alt=""/> </a> <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=919703615148"> <img src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/whatsapp.png" class=" lg:w-[40px] w-[34px] h-[34px] lg:h-[40px] mx-[4px] " alt=""></img></a></div>
         <br/> <button class="h-10 px-5 text-white-500 transition-colors duration-150 bg-black-700 rounded-full focus:shadow-outline hover:bg-indigo-800">Privacy Policy</button>
          <button class="h-10 px-5 text-white-500 transition-colors duration-150 bg-black-700 rounded-full focus:shadow-outline hover:bg-indigo-800">Terms and conditions</button>
         <br/><br/><br/>
          <p className={styles.sectionSubText}>© 2023 Crater - All Right Reserved.</p>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      <div>
     

<div></div>
    </div>
    
   
    </div>
  );
};

export default SectionWrapper(Contact, "contact");