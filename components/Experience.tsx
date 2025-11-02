import Image from "next/image";
import Miffy2 from "@/public/drawings/miffy2.png";
import { experience } from "@/data/Experience";

export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div className="flex justify-center items-center w-full gap-5">
        <div className="font-baloo2 text-5xl font-bold text-soft-pink">
          Experience
        </div>
        <div className="border h-px border-soft-gray w-full" />
        <Image src={Miffy2} alt="Miffy" width={65} height={65} />
      </div>
      {experience.map((exp, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <div className="flex">
            <Image
              src={exp.image}
              alt={exp.company}
              width={48}
              height={48}
              className="rounded-lg mr-4"
            />
            <div className="flex flex-col">
              <p className="text-xl font-semibold">{exp.role}</p>
              <p className="text-sm text-gray-600">
                {exp.company} · {exp.location} · {exp.date}
              </p>
            </div>
          </div>
          <ul className="list-disc list-inside">
            {exp.bullets.map((b, i) => (
              <li className="text-md" key={i}>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
