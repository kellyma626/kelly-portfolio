import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 flex flex-col gap-y-2 text-sm">
      <div className="flex gap-4 ">
        <Link
          href="https://github.com/kellyma626"
          className="hover:text-peach"
          target="_blank"
        >
          github
        </Link>
        <Link
          href="https://www.linkedin.com/in/kellyma626/"
          className="hover:text-peach"
          target="_blank"
        >
          linkedin
        </Link>
        <Link
          href="mailto:kellyma.dev@gmail.com"
          className="hover:text-peach"
          target="_blank"
        >
          email
        </Link>
        <Link
          href="/Kelly_Ma_Resume.pdf"
          className="hover:text-peach"
          target="_blank"
        >
          resume
        </Link>
      </div>
      © {new Date().getFullYear()} Kelly Ma. All rights reserved.
    </footer>
  );
};

export default Footer;
