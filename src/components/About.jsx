import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard =({index, title, icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    <p> Greetings! I'm a hands-on software developer with over 2 years of immersive experience, blending technical prowess with industry insights. My expertise spans a rich tapestry of technologies, and I thrive on the dynamic interplay between creativity and cutting-edge solutions.</p>
    <h2 className='text-white mt-5'>Frontend Mastery:</h2>
      <h2 className='text-white'>🅰️ Angular | ⚛️ React | 🌐 Three.js</h2>
    <p>Crafting immersive user experiences is my passion. Whether it's harnessing the power of Angular, the versatility of React, or the spatial wonders of Three.js, I bring your frontend visions to life with pixel-perfect precision.</p>
    
   <h2 className='text-white mt-5'>Backend Wizardry:</h2>
  <h2 className='text-white'>🌱 Spring Boot | 🚀 Node.js</h2>

Fueling your applications with robust and scalable backends is my forte. I seamlessly navigate between Spring Boot and Node.js, ensuring your systems are not just functional but also future-proof.

<h2 className='text-white mt-5'>Full-Stack Prowess:</h2>
<h2 className='text-white'>🐍 Python | ☕ Java | 🕸 JavaScript | 🔷 TypeScript | 💻 PHP | 🔄 C/C++</h2>

From the elegance of Python to the versatility of Java, I'm fluent in a plethora of languages, ensuring your projects are not just coded but crafted with finesse.

<h2 className='text-white mt-5'>Database Maestro:</h2>
<h2 className='text-white'>🗃 MySQL | 🍃 Mongoose</h2>

A strong foundation is crucial. I specialize in database design, ensuring your data is not just stored but optimized for performance and scalability.

<h2 className='text-white mt-5'>Mobile Marvels:</h2>
<h2 className='text-white'>🌐 Flutter (Dart) | 📱 Kotlin (Android)</h2>

In the mobile realm, I wield the Flutter framework for cross-platform finesse and Kotlin for native Android development. Your apps will not just function; they'll shine on every device.

<h2 className='text-white mt-5'>UI/UX Artistry:</h2>
<h2 className='text-white'>🎨 Design Thinking</h2>

Beyond code, I delve into the aesthetic, blending function with form. UI/UX design is not just a step in the process; it's a cornerstone of my approach.

Ready to turn your ideas into reality? Let's collaborate and build something extraordinary. Your vision, my expertise—let's create the future together!

<h2 className='text-yellow-300 font-bold'>Let's Code Dreams Into Reality! 💻✨</h2>
    
    
    
    
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  );
}

export default SectionWrapper(About,'about')