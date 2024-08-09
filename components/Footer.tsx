"use client";

import Image from "next/image";
import { socialMedia } from "@/data";
import { techTools } from "@/data";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope } from 'react-icons/fa'
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  const [state, handleSubmit] = useForm("manwjogg");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

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
        <h3 className="font-bold text-xl mb-8">Technologies and Tools</h3>
        <ul className="mt-2 flex flex-wrap gap-4">
          {techTools.map(
            ({
              id,
              name,
              icon,
            }: {
              id: number;
              name: string;
              icon: JSX.Element;
            }) => (
              <li
                key={id}
                className="transform transition-transform hover:translate-x-1 duration-300 ease-in-out hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]"
              >
                {icon || name}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleFormSubmit}
        className="relative mt-10 flex flex-col border border-[1px solid black] p-4 rounded-lg bg-[#111110] opacity-[0.9] w-full max-w-[700px] mx-auto"
      >
        <h3 className="font-bold text-xl text-center">Contact Form</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 mt-5">
          <label htmlFor="subject" className="mb-2 flex flex-col">
            Subject
            <input
              id="subject"
              type="text"
              name="subject"
              className="mb-4 mt-2 p-2 border border-gray-300 rounded"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </label>

          <label htmlFor="email" className="mb-2 flex flex-col">
            Email Address
            <input
              id="email"
              type="email"
              name="email"
              className="mb-4 mt-2 p-2 border border-gray-300 rounded"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
          <label htmlFor="firstName" className="mb-2 flex flex-col">
            First Name
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="mb-4 mt-2 p-2 border border-gray-300 rounded"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="FirstName"
              field="firstName"
              errors={state.errors}
            />
          </label>

          <label htmlFor="lastName" className="mb-2 flex flex-col">
            Last Name
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="mb-4 mt-2 p-2 border border-gray-300 rounded"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="LastName"
              field="lastName"
              errors={state.errors}
            />
          </label>
        </div>

        <label htmlFor="message mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="mb-4 mt-2 p-2 border border-gray-300 rounded"
          required
          autoComplete="off"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div className="mx-auto">
          <MagicButton disabled={state.submitting} type="submit" title="Submit" icon={<FaEnvelope />} position="right" />
        </div>
      </form>

      {/* Media Links */}
      <div className="flex justify-between items-center gap-3 mb-3 px-4 mt-20">
        <ul className="flex gap-4">
          {socialMedia.map(({ id, link, img, alt }) => (
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