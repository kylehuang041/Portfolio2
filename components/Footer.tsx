import Image from "next/image";
import { personalInfo as info } from "@/data";
import { socialMedia } from "@/data";
import { techTools } from "@/data";


const Footer = () => {
  return (
    <footer className="bg-black-100 flex flex-col gap-3 h-full w-full">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96 -z-100">
        <Image
          src="./footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-75"
          width={100}
          height={100}
        />
      </div>

      {/* Technologies and Tools */}
      <div className="relative z-10">
        <h3 className="font-bold text-xl my-10">Technologies and Tools</h3>
        <ul className="mt-2 flex flex-wrap gap-4">
          {techTools.map(({id, name, icon} : {id: number, name: string, icon: JSX.Element}) => (
            <li key={id} className="transform transition-transform hover:translate-x-1 duration-300 ease-in-out hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">
              {icon || name}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex-grow flex items-center justify-center my-8">
        <div className="flex flex-col bg-[#111010] sm:flex-col md:flex-row border border-darkblue-1000 p-4 rounded-lg w-fit justify-center items-center gap-2 mx-auto">
          <Image
            src={`./img/${info.photo}`}
            alt="Image of Kyle Huang"
            width={100}
            height={100}
            className="mb-4 lg:mb-0 sm:w-[100px]"
          />
          <div id="contact">
            <h3 className="font-bold text-3xl">{info.name}</h3>
            <p className="text-sm mb-2">{info.email}</p>
            <p className="text-xl">{info.school}</p>
            <p className="italic">
              {info.major}: {info.concentration}
            </p>
            <p className="italic">{info.status}</p>
          </div>
        </div>
      </div>

      {/* Media Links */}
      <div className="flex justify-between items-center gap-3 mb-3 px-4">
        <ul className="flex gap-4">
          {socialMedia.map(({id, link, img, alt}) => (
            <li key={id}>
              <a href={link} target="_blank" className="relative z-50">
                <Image
                  src={`./${img}`}
                  alt={alt}
                  width={28}
                  height={28}
                  className="hover:opacity-[0.7]"
                />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-white">&copy; 2024 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;