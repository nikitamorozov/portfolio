import React from "react";
import { FaReact, FaCode, FaServer } from 'react-icons/fa';

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Nikita Morozov",
  title: "Software Developer",
  subtitle: "Tbilisi, Georgia",
  social: {
    github: "https://github.com/nikitamorozov",
    dribbble: "https://dribbble.com/nikita-s-morozov",
    twitter: "https://x.com/om_nom_nik",
    email: "morozov.nikita@me.com",
    telegram: "https://t.me/om_nom_nik",
  },
  about: {
    title: "My Background",
    description:
      "I have a strong foundation in GoLang, Nodejs, MongoDB, React, NextJS, AWS, Kubernetes, etc. I have led a tech team covering frontend, backend, and DevOps, and I have built scalable products from scratch with the commitment to making a positive impact through technology.\n" +
      "\n" +
      "Feel free to connect with me!",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "BackEnd",
      skillIcon: <FaServer className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "Kvarum",
      image: "/projects/kvarum.jpg",
      description: <>Service for Creating Event Schedules.<br/>Assist in crafting your event schedule for any purpose. Boost conversion rates and increase sales with our service.</>,
      tags: [
        "Treenity",
        "Remix",
        "Kubernetes",
        "Postgres"
      ],
      link: "https://kvarum.app/"
    },
    // {
    //   title: "LangCo. Online English education platform",
    //   image: "/projects/langco.png",
    //   description: "LangCo is a leading online Language, Soft Skills and Cultural Training platform.",
    //   tags: [
    //     "react + redux",
    //     "nextjs",
    //     "Kubernetes",
    //     "Postgres"
    //   ],
    //   link: "https://lang-coach.com"
    // },
    {
      title: "Tire Size Calculator",
      image: "/projects/tire_size_calculator.png",
      description: "The tiny app helps you choose the right tyre size",
      tags: [
        "react-native",
        "android",
        "ios",
      ],
      link: "https://play.google.com/store/apps/details?id=com.freshrocket.wheelwillfit"
    },
    {
      title: "This Way",
      image: "/projects/this_way.png",
      description: "This Way is a reaction and concentration game, so let's guide all circles to squares.",
      tags: [
        "Unity3d",
        "ECS",
        "C#",
        "iOS",
        "Android",
      ],
      link: "https://play.google.com/store/apps/details?id=threepixel.thisway"
    },
    {
      title: "InstaPrint",
      image: "/projects/insta_print.png",
      description: "This app allows you to save posts, send it via email, print it out or share it with others.",
      tags: [
        "Unity3d",
        "ECS",
        "C#",
        "iOS",
        "Android",
      ],
      link: "https://play.google.com/store/apps/details?id=com.nikapps.instaprint"
    },
    {
      title: "Spectre Team Games",
      image: "/projects/spectre_games.png",
      description: "Microgames for Android and iOS",
      tags: [
        "Unity3d",
        "C#",
        "iOS",
        "Android",
      ],
      link: "https://play.google.com/store/apps/dev?id=8949798414654670541"
    },
    {
      title: "Bot constructor",
      image: "/projects/bot_constructor.jpeg",
      description: "Open-source visual bot constructor for telegram bots.",
      tags: [
        "GoLang",
        "React",
        "Telegram",
        "bots",
      ],
      link: "https://gitlab.com/nikita.morozov/bots-ms"
    },
    {
      title: "Unity3d Assets store",
      tags: [
        "C#",
        "Shaders",
        "Modules"
      ],
      link: "https://assetstore.unity.com/publishers/8893"
    }
  ]
};
export default data;
