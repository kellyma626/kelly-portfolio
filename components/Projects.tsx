"use client";

import { useState } from "react";
import { projects } from "@/data/Projects";
import Image from "next/image";
import Smiski from "@/public/drawings/smiski.png";

export default function Projects() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section id="projects">
      {/* Header */}
      <div className="flex justify-center items-center w-full gap-5 md:mb-10">
        <div className="font-baloo2 text-5xl font-bold text-soft-pink">
          Projects
        </div>
        <div className="border h-px border-soft-gray w-full" />
      </div>

      <div className="md:my-5 my-2 text-sm md:text-base text-left pr-12 md:pr-0">
        Choose a game card to check out my projects! <br /> Additional projects
        in migration.
      </div>

      {/* DS + Game Cards */}
      <div className="flex flex-col lg:flex-row relative items-center lg:items-start">
        {/* SMISKI sitting on top */}
        <Image
          src={Smiski}
          alt="Smiski"
          width={100}
          height={100}
          className="absolute translate-x-26 sm:translate-x-44 md:translate-x-50 md:-translate-y-26 lg:translate-x-80 -translate-y-13 lg:-translate-y-27 z-30 w-16 sm:w-20 md:w-24"
        />

        {/* DS Section */}
        <div className="flex flex-col items-center scale-90 sm:scale-95 md:scale-100">
          {/* --- TOP DS SCREEN --- */}
          <div className="flex justify-center items-center border rounded-2xl w-[20rem] sm:w-md md:w-152 h-40 sm:h-60 md:h-72 bg-ds-pink border-deep-brown">
            <img
              src="2DS/holes.png"
              alt="holes left"
              className="h-20 sm:h-32 md:h-44 mr-2 sm:mr-3"
            />

            <div className="rounded-2xl border border-soft-gray bg-[#fff1ee] w-56 sm:w-[20rem] md:w-104 h-32 sm:h-48 md:h-60 mx-2 sm:mx-3 overflow-y-auto">
              <div className="m-3 sm:m-6 text-xs sm:text-sm space-y-2 sm:space-y-3">
                <div>
                  <div className="font-bold text-[3vw] sm:text-2xl mb-1 text-soft-pink">
                    {active.title}
                  </div>
                  <p className="font-light italic text-[2vw] md:text-sm ">{active.tech}</p>
                  <p className="font-light italic text-[2vw] md:text-sm ">{active.date}</p>
                </div>

                <ul className="list-disc pl-4 space-y-1 text-[2vw] md:text-sm ">
                  {active.screen2.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>

            <img
              src="2DS/holes.png"
              alt="holes right"
              className="h-20 sm:h-32 md:h-44 ml-2 sm:ml-3"
            />
          </div>

          {/* Hinge */}
          <img
            src="2DS/bar.png"
            alt="DS hinge"
            className="w-[20rem] sm:w-md md:w-152 h-3 sm:h-4 md:h-6"
          />

          {/* --- BOTTOM DS SCREEN --- */}
          <div className="flex justify-center items-center border border-deep-brown rounded-2xl w-[20rem] sm:w-md md:w-152 h-40 sm:h-60 md:h-72 bg-ds-pink">
            <img
              src="2DS/controls1.png"
              alt="controls1"
              className="h-20 sm:h-32 md:h-44"
            />

            <div className="rounded-2xl border border-soft-gray bg-[#fff1ee] w-56 sm:w-[20rem] md:w-104 h-32 sm:h-48 md:h-60 mx-2 sm:mx-3 overflow-y-auto">
              <div className="m-3 sm:m-6 text-xs sm:text-sm space-y-3 sm:space-y-4">
                <ul className="list-disc pl-4 space-y-1 text-[2vw] md:text-sm">
                  {active.screen3.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <div className="flex gap-2 mt-3 sm:mt-4">
                  {active.screen3.links.map((link, i) => (
                    <a key={i} href={link.href} target="_blank">
                      <img
                        src={link.img}
                        alt=""
                        className="h-8 sm:h-10 md:h-12"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <img
              src="2DS/controls2.png"
              alt="controls2"
              className="h-20 sm:h-32 md:h-44"
            />
          </div>
        </div>

        {/* --- GAME CARDS --- */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 ml-0 lg:ml-12 mt-8 lg:mt-0">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActive(proj)}
              className="flex flex-col justify-around items-center border rounded-[10px_10px_10px_30px] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 transition-transform hover:scale-105 hover:opacity-90 cursor-pointer bg-dark-gray border-deep-brown shadow-[0_3px_4px_0_var(--color-shadow-peach)]"
            >
              <img
                src={`misc/${proj.id}.jpg`}
                alt={proj.title}
                className="rounded-lg w-[75px] h-[75px] translate-x-0.5 md:w-24 md:h-24 mt-1 sm:mt-2 object-cover"
              />
              <img
                src="misc/black-arrow.png"
                alt="arrow"
                className="h-3 sm:h-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}