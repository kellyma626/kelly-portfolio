"use client";
import { tags } from "@/data/Navbar";
import ScrollLink from "@/components/ScrollLink";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full py-3 text-sm bg-[#fff1ee]/80">
      <div className="relative flex md:gap-8 gap-4">
        <ScrollLink
          to="#home"
          className="left-4 cursor-pointer font-bold text-soft-pink hover:text-peach pl-10"
        >
          kelly ma
        </ScrollLink>
        <div className="flex md:gap-8 gap-4">
          {tags.map(({ name, link }, index) => (
            <ScrollLink
              key={index}
              to={link.replace("#", "")}
              className="cursor-pointer hover:text-peach"
            >
              {name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
