"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3D-Card";
import { projects } from "@/data";

const openLink = (e: React.MouseEvent<HTMLDivElement>, link: string) => {
  e.preventDefault();
  window.open(link, "_blank");
};

export default function Projects() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center m-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-xs sm:max-w-none sm:self-center">
        {projects.map((proj, index) => (
          <CardContainer
            key={index}
            className={`inter-var ${proj.link ? "cursor-pointer" : ""}`}
          >
            <div onClick={(e) => proj.link && openLink(e, proj.link)}>
              <ProjectCard proj={proj} />
            </div>
          </CardContainer>
        ))}
      </div>
    </>
  );
}

function ProjectCard({ proj }: { proj: any }) {
  return (
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        {proj.title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="20"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        {proj.des}
      </CardItem>
      <CardItem
        translateZ="100"
        rotateX={10}
        rotateZ={-5}
        className="w-full mt-4"
      >
        <Image
          src={`./img/${proj.img}`}
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt={proj.title}
          width={500}
          height={300}
        />
      </CardItem>
      <div className="flex justify-between items-center mt-20">
        <p>{!proj.link ? "Repository: Private" : "Repository: Public"}</p>
      </div>
    </CardBody>
  );
}
