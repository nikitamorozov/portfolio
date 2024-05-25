import Image from 'next/image';
import React from "react";
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { FaRegEnvelope } from "react-icons/fa";

function Card({ name, title, subtitle, social: { github, dribbble, twitter, email, telegram } }) {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <Image
            className="w-32 mx-auto shadow-xl rounded-full"
            src="/profile.jpeg"
            width={300}
            height={300}
            alt="Profile face"
          />
          <Image
            className="w-10 mx-auto shadow-xl rounded-full"
            style={{ position: "relative", left: -40, bottom: 40 }}
            src="/logo.png"
            width={40}
            height={40}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            {name}
          </p>
          <p className="block text-xs sm:text-base text-gray-600 pt-2 px-5">
            {title}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pb-4 px-5 inline-block border-b-2">
            {subtitle}
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={github}
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
              href={dribbble}
            >
              <FaDribbble />
              <span className="sr-only">Dribble</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black hover:bg-black rounded-full hover:text-white transition-colors duration-300"
              href={twitter}
            >
              <FaXTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href={telegram}
            >
              <FaTelegramPlane />
              <span className="sr-only">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
