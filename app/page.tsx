import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="m-20">
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
