"use client"

import About from '../components/About';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import data from '@/data';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} subtitle={data.subtitle} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Projects projects={data.projects} />
        <Footer />
      </div>
    </div>
  );
}
