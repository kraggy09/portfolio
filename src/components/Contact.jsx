import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contact" className="py-20 ">
      <h3 className="text-2xl text-orange-600 font-bold ">CONTACT</h3>
      <h3 className="text-3xl font-semibold ">Don't be shy! Hit me up!👇</h3>
      <div className="flex mt-16">
        <span className="flex justify-around px-16 items-center">
          <FaLocationDot color="#FF8C00" size={50} />
          <span className="text-xl mx-6">
            <h1 className="font-bold mb-3">Location</h1>
            <a
              href="https://www.google.com/maps/place/Bihar+Sweets+Mart/@22.5333129,88.3201399,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0279fd515a02d7:0x3e3ee17bb802f65c!8m2!3d22.533308!4d88.3227148!16s%2Fg%2F1tjpnxz3?entry=ttu"
              target="_blank"
              className="hover:text-orange-600"
              rel="noreferrer"
            >
              Kolkata,India
            </a>
          </span>
        </span>
        <span className="flex  justify-around px-16 items-center">
          <BiLogoGmail className="mx-8" color="#FF8C00" size={50} />
          <span className="text-xl">
            <h1 className="font-bold mb-3">Mail</h1>
            <a
              href="mailto:kaifshaikh2013.sk@gmail.com"
              target="_blank"
              className="hover:text-orange-600"
              rel="noreferrer"
            >
              kaifshaikh2013.sk@gmail.com
            </a>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Contact;
