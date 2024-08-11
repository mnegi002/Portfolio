"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { FlipWords } from "../ui/flip-words";
import Button from "./shinebutton";
// import Link from "next/link";

export function AuroraBackgroundDemo() {
  const words = ["Software Developer", "Full Stack Developer", "Web Developer"];

  return (
    <div className="h-screen">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-[95vw] flex flex-col gap-3 items-center justify-center  overflow-hidden"
        >
          <div className="text-3xl tracking-wide  md:text-5xl font-bold dark:text-white text-center">
            Hey, I'm Mayank Negi, <br />
            a <FlipWords words={words} />
          </div>
          <div className="font-extralight  text-base md:text-2xl dark:text-neutral-200 py-4">
            Turning Ideas into Reality
          </div>
        </motion.div>
        <Button/>
      </AuroraBackground>
    </div>
  );
}
