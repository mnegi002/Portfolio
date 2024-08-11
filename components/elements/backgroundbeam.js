"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { IconPhone, IconMail, IconBrandLinkedin } from "@tabler/icons-react";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Connect With Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mt-4">
          I have made more than 20 projects using a variety of technologies including HTML, CSS, Bootstrap, TailWind, React.js, Node.js, JavaScript, MongoDB, Next.js, Express.js, and WebSocket.io.
        </p>
        <div className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          <div className="flex items-center justify-center gap-2 my-4">
            <IconPhone size={20} className="text-neutral-200" />
            Contact Number: 9810694357
          </div>
          <div className="flex items-center justify-center gap-2 my-4">
            <IconMail size={20} className="text-neutral-200" />
            Email: <a href="mailto:itsmemayank02@gmail.com">itsmemayank02@gmail.com</a>
          </div>
          <div className="flex items-center justify-center gap-2 my-4">
            <IconBrandLinkedin size={20} className="text-neutral-200" />
            LinkedIn: <a href="https://www.linkedin.com/in/mnegi002/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/mnegi002/</a>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
