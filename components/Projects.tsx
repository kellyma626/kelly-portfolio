"use client";

import { useState } from "react";
import { projects } from "@/data/Projects";

export default function Projects() {
  const [active, setActive] = useState(projects[0]);
  return (
    <section id="projects">
      <div className="flex justify-center items-center w-full gap-5">
        <div className="font-baloo2 text-5xl font-bold text-soft-pink">
          Projects
        </div>
        <div className="border h-px border-soft-gray w-full" />
      </div>

      <div className="my-5">
        Choose a game card to check out my projects! <br /> Additional projects
        in migration.
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* DS SECTION */}
        <div className="flex flex-col items-center">
          {/* --- TOP DS SCREEN (screen1 + screen2) --- */}
          <div className="flex justify-center items-center border rounded-2xl w-152 h-72 bg-ds-pink border-deep-brown">
            <img src="2DS/holes.png" alt="holes left" className="h-44 mr-3" />

            {/* Inner top screen */}
            <div className="rounded-2xl border border-soft-gray bg-cream w-104 h-60 mx-3 overflow-y-auto">
              <div className="m-6 text-sm space-y-3">
                {/* screen1 content */}
                <div>
                  <div className="font-bold text-2xl mb-1 text-soft-pink">
                    {active.title}
                  </div>
                  <p className="font-light italic">{active.tech}</p>
                  <p className="font-light italic">{active.date}</p>
                </div>

                {/* screen2 content */}
                <ul className="list-disc pl-4 space-y-1">
                  {active.screen2.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>

            <img src="2DS/holes.png" alt="holes right" className="h-44 ml-3" />
          </div>

          {/* --- DS HINGE --- */}
          <img src="2DS/bar.png" alt="DS hinge" className="w-152 h-6" />

          {/* --- BOTTOM DS SCREEN (screen3 only) --- */}
          <div className="flex justify-center items-center border border-deep-brown rounded-2xl w-152 h-72 bg-ds-pink">
            <img src="2DS/controls1.png" alt="controls1" className="h-44" />

            {/* screen3 content */}
            <div className="rounded-2xl border border-soft-gray bg-cream w-104 h-60 mx-3 overflow-y-auto">
              <div className="m-6 text-sm space-y-4">
                <ul className="list-disc pl-4 space-y-1">
                  {active.screen3.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <div className="flex gap-2 mt-4">
                  {active.screen3.links.map((link, i) => (
                    <a key={i} href={link.href} target="_blank">
                      <img src={link.img} alt="" className="h-12" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <img src="2DS/controls2.png" alt="controls2" className="h-44" />
          </div>
        </div>

        {/* --- GAME CARDS --- */}
        <div className="grid grid-cols-2 grid-rows-[repeat(4,20%)] gap-5 ml-12 mt-8 lg:mt-0">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActive(proj)}
              className="flex flex-col justify-around items-center border rounded-[10px_10px_10px_30px] w-32 h-32 transition-transform hover:scale-105 hover:opacity-90 cursor-pointer bg-dark-gray border-deep-brown shadow-[0_3px_4px_0_var(--color-shadow-peach)]"
            >
              <img
                src={`misc/${proj.id}.jpg`}
                alt={proj.title}
                className="rounded-lg w-24 h-24 mt-2 object-cover"
              />
              <img src="misc/black-arrow.png" alt="arrow" className="h-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
