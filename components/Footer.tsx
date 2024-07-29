import Image from "next/image";
import { personalInfo as info } from "@/data";

const Footer = () => {
  return (
    <footer className="bg-black-100 flex flex-col gap-3 min-h-[600px] relative">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-75"
        />
      </div>

      {/* Contact Info */}
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col md:flex-row border border-darkblue-1000 p-4 rounded-lg w-fit justify-center items-center gap-2 mx-auto">
          <Image
            src={`/img/${info.photo}`}
            alt="Image of Kyle Huang"
            width={100}
            height={100}
            className="mb-4 lg:mb-0 sm:w-[100px]"
          />
          <div id="contact">
            <h3 className="font-bold text-xl">{info.name}</h3>
            <p className="text-sm mb-2">{info.email}</p>
            <p className="italic">{info.school}</p>
            <p className="italic">{info.major}: {info.concentration}</p>
            <p className="mt-2">{info.description}</p>
          </div>
        </div>
      </div>

      {/* Technologies and Tools */}
      <div className="absolute bottom-25 left-0 sm:top-0 sm:left-4">
        <h3 className="font-bold text-xl-2">Technologies and Tools</h3>
        <ul className="mt-2">
          <li>&bull;&nbsp;Next.js</li>
          <li>&bull;&nbsp;Tailwind CSS</li>
          <li>&bull;&nbsp;Framer Motion</li>
          <li>&bull;&nbsp;Git</li>
          <li>&bull;&nbsp;GitHub</li>
          <li>&bull;&nbsp;Node.js</li>
        </ul>
      </div>

      {/* Media Links */}
      <div className="flex justify-between items-center gap-3 mb-3 px-4 absolute bottom-0 left-0 right-0">
        <ul className="flex gap-4">
          <li>
            <a href="https://www.linkedin.com/in/kyle-huang-041/" target="_blank">
              <Image src="/link.svg" alt="LinkedIn" width={28} height={28} />
            </a>
          </li>
          <li>
            <a href="https://github.com/kylehuang041" target="_blank">
              <Image src="/git.svg" alt="GitHub" width={28} height={28} />
            </a>
          </li>
        </ul>
        <p className="text-white">&copy; 2024 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;