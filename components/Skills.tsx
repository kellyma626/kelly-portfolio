import Image from "next/image";
import Miffy from "@/public/drawings/miffy.png";
import { skills } from "@/data/Skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex justify-center items-center w-full gap-5">
        <div className="font-baloo2 text-5xl font-bold text-soft-pink">
          Skills
        </div>
        <div className="border h-px border-soft-gray w-full" />
        <Image
          src={Miffy}
          alt="Miffy"
          width={120}
          height={120}
          className="w-15"
        />
      </div>

      <div className="flex flex-wrap gap-5 justify-center mt-5">
        {Object.entries(skills).map(([name, image]) => (
          <div
            key={name}
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <Image
              src={image}
              alt={name}
              width={80}
              height={80}
              className="w-10 h-10 rounded-lg object-contain"
            />
            <p className="text-sm mt-2">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
