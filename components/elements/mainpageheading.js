"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { FlipWords } from "../ui/flip-words";
import Button from "./shinebutton";
import Image from "next/image";
// import Link from "next/link";

export function AuroraBackgroundDemo() {
  const words = ["Software Developer", "Full Stack Developer", "Web Developer"];

  return (
    <div className="h-screen w-full">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="  flex md:flex-row flex-col-reverse gap-3 items-center justify-center  overflow-hidden"
        >
          <div className="flex  flex-col items-center">
            <div className="text-2xl  tracking-wide  md:text-5xl font-bold dark:text-white text-center">
              Hey, I&apos;m Mayank Negi, <br />
              a <FlipWords words={words} />
            </div>
            <div className="font-extralight text-center text-base md:text-2xl dark:text-neutral-200 py-4">
              Turning Ideas into Reality
            </div>
            <div className="text-white py-4  w-[70%] text-center ">
              I have an overall experience of 4 years in Web Development as a
              Freelancer with industry experience of 2.5 years.
            </div>
            <Button />
          </div>
          <div className="flex h-full w-[40%] items-start justify-start px-4 ">
            <Image
              src="/images/profile-pic.jpeg"
              width={350}
              height={350}
              alt="Picture of the author"
              className="rounded-full "
            />
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
