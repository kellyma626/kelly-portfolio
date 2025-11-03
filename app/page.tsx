import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col md:mx-30 mx-15 my-10 gap-y-10">
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
