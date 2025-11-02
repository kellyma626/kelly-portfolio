"use client";

import Image from "next/image";
import Kelly from "@/public/misc/kelly.jpg";
import { FaGithub, FaLinkedin, FaFile, FaEnvelope } from "react-icons/fa";
import { motion, Variants } from "motion/react";

const SlideInFromLeft: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const Pebble: Variants = {
  initial: { opacity: 0, x: -10, y: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

export default function Intro() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center gap-12"
    >
      {/* Image */}
      <Image
        src={Kelly}
        alt="Kelly"
        width={350}
        height={350}
        className="rounded-2xl shadow-[0_8px_16px_0_var(--color-shadow-peach)] border-2 border-ds-pink"
      />

      {/* Text + Icons */}
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        {/* Heading */}
        <motion.div
          variants={SlideInFromLeft}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView="animate"
          custom={0}
          className="text-5xl font-baloo2 text-soft-pink font-bold"
        >
          Hello, my name is Kelly ;
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={SlideInFromLeft}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView="animate"
          custom={0.25}
          className="font-semibold max-w-lg"
        >
          I'm a Computer Science student at the University of California,
          Riverside interested in full-stack development and AI/ML.
        </motion.div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-3 md:justify-start mt-2">
          {[
            {
              href: "https://github.com/kellyma626",
              icon: <FaGithub size={28} />,
            },
            {
              href: "https://www.linkedin.com/in/kellyma626/",
              icon: <FaLinkedin size={28} />,
            },
            {
              href: "mailto:kellyma.dev@gmail.com",
              icon: <FaEnvelope size={28} />,
            },
            { href: "/Kelly_Ma_Resume.pdf", icon: <FaFile size={28} /> },
          ].map(({ href, icon }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              variants={Pebble}
              viewport={{ once: true, amount: 0 }}
              initial="initial"
              whileInView="animate"
              custom={(index % 5) * 0.2 + 0.5}
              whileHover={{
                scale: 1.2,
                color: "var(--color-peach)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-soft-pink p-2 rounded-xl transition-colors duration-50 hover:text-peach"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
