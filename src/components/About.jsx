import React from "react";

const About = () => {
  return (
    <div id="about" className="pt-32 w-full h-[100vh] flex">
      <div className="w-[40vw]   flex">
        <img
          src="/laptop.webp"
          className="h-[380px] rounded-xl w-[400px]"
          alt="Laptop"
        />
      </div>
      <div className="w-[40vw]">
        <h3 className="text-orange-600 font-bold my-3 text-lg">ABOUT ME</h3>
        <h2 className="font-bold text-2xl my-3">
          A dedicated Front-end Developer based in Kolkata, India 📍
        </h2>
        <p className="text-lg mr-10">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and ReduxToolkit. I
          excel in designing and maintaining responsive websites that offer a
          smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
