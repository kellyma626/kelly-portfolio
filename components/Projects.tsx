"use client";

import Image from "next/image";
import React from "react";
import { dsImages, gamesData, arrows } from "@/data/Projects";

const DsAndGames: React.FC = () => {
  return (
    <div className="ds-and-games">
      {/* ---------- DS Section ---------- */}
      <div className="ds">
        <div className="outer">
          <div>
            <Image className="holes" src={dsImages.holes} alt="holes" />
          </div>

          <div className="inner">
            <div className="description2">
              <div className="screen1">
                <div className="topic">Women in Computing Website</div>
                <div className="thin">React.js, Next.js, Tailwind CSS, GitHub</div>
                <div className="thin">October 2023 - December 2023</div>
              </div>
              <ul className="screen2">
                <li>Developed a responsive website for Women in Computing at UCR to showcase club info</li>
                <li>Used GitHub Issues to organize work, and collaborated through weekly Agile scrum meetings</li>
              </ul>
            </div>
          </div>

          <div>
            <Image className="holes" src={dsImages.holes} alt="holes" />
          </div>
        </div>

        <Image className="center" src={dsImages.bar} alt="bar" />

        <div className="outer">
          <div>
            <Image className="controls1" src={dsImages.controls1} alt="controls1" />
          </div>
          <div className="inner">
            <div className="description2 screen3">
              <ul>
                <li>
                  Identified recurring production inconsistencies caused by hardcoded event data; implemented dynamic component generation, removed 250+ lines of redundant code, and initiated a broader cleanup across the codebase
                </li>
              </ul>
              <div>
                <a target="_blank" href="https://winc.cs.ucr.edu/" rel="noopener noreferrer">
                  <Image className="www" src={dsImages.www} alt="Website" />
                </a>
                <a target="_blank" href="https://github.com/acm-ucr/winc-website" rel="noopener noreferrer">
                  <Image className="www bug" src={dsImages.gitcat} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Image className="controls2" src={dsImages.controls2} alt="controls2" />
          </div>
        </div>
      </div>

      {/* ---------- Games Section ---------- */}
      <div className="games">
        {gamesData.map((game, index) => (
          <div key={index} className={`${game.className} game on`}>
            <Image className="game-tag" src={game.img} alt={`${game.className} game`} />
            <div>
              <Image className="down-arrow" src={arrows.black} alt="arrow" />
            </div>
          </div>
        ))}

        {/* Placeholder “on the way” slots */}
        {[...Array(2)].map((_, index) => (
          <div key={`off-${index}`} className="game off">
            <div className="game-tag">
              <footer>ON THE WAY</footer>
            </div>
            <div>
              <Image className="down-arrow" src={arrows.black} alt="arrow" />
            </div>
          </div>
        ))}
      </div>

      <div id="gal"></div>
    </div>
  );
};

export default DsAndGames;