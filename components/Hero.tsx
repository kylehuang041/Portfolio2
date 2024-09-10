import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaDownload } from "react-icons/fa";
import { quote, heroDesc } from "../data";
import Image from "next/image";
import { personalInfo as info } from "@/data";
import { resumeFileName } from "../data";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">

      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32
          md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight
          className="top-10 left-[90%] h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-5 left-80 h-[80vh] w-[50vw]"
          fill="red"
        />
      </div>

      {/**
       *  UI: grid
       *  Link: https://ui.aceternity.com/components/grid-and-dot-backgrounds
       */}
        <div
          className="h-screen w-full dark:bg-black-100 bg-white 
          dark:bg-grid-white/[0.2] bg-grid-black/[0.1] flex items-center
          justify-center absolute top-0 left-0"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center
            justify-center dark:bg-black-100 bg-white
            [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[75vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest font-bold text-2xl text-center text-blue-100 max-w-80">
              {heroDesc.title}
            </h2>

            {/* Profile */}
            <div className="flex-grow grid grid-cols-1 gap-4 items-center justify-center my-8 w-full lg:w-[100%]">
              <div className="opacity-[0.9] bg-[#111010] border border-darkblue-1000 p-4 rounded-lg w-full justify-center items-center gap-2 mx-auto lg:grid lg:grid-cols-2 lg:gap-4">
                <div className="flex flex-col gap-4 rounded-full md:p-20">
                  <div className="flex justify-center">
                    <Image
                      src={`./img/${info.photo}`}
                      alt="Image of Kyle Huang"
                      width={150}
                      height={150}
                      className="mb-4 lg:mb-0 sm:w-[150px] rounded-full"
                    />
                  </div>
                  <div id="contact" className="text-left flex flex-col items-start">
                    <h3 className="font-bold text-3xl">{info.name}</h3>
                    <p className="text-sm mb-2">{info.email}</p>
                    <p className="text-xl">{info.school}</p>
                    <p className="italic text-xs">
                      {info.major}: {info.concentration}
                    </p>
                    <p className="italic text-xs">{info.status}</p>
                  </div>
                </div>
                <TextGenerateEffect
                    words={heroDesc.words}
                    className="text-center md:tracking-wider mt-4 mb-4 text-sm md:text-lg lg:text-md"
                  />
              </div>
            </div>

            {/* <a href={`./${resumeFileName}`} download>
              <MagicButton
                title="Download Resume"
                icon={<FaDownload />}
                position="right"
              />
            </a> */}

            <blockquote className="mx-auto sm:mt-20 md:mt-25 lg:mt-30 mt-10 p-10 border-r-2 bg-[#0e082e]">
              <q className="text-left text-white before">{quote.quote}</q>
              <p className="text-right text-white">-&nbsp;{quote.author}</p>
            </blockquote>
          </div>
        </div>
      </div>
  );
};

export default Hero;