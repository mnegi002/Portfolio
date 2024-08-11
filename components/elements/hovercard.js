"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-center font-bold p-6">Familiar Technologies</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "React.js",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture.",
    link: "#",
  },
  {
    title: "Next.js",
    description:
      "A  React framework for building server-rendered applications with built-in support for static site generation.",
    link: "#",
  },
  {
    title: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for building scalable network applications.",
    link: "#",
  },
  {
    title: "MongoDB",
    description:
      "A NoSQL database that uses a flexible, JSON-like data model to store and manage data.",
    link: "#",
  },
  {
    title: "Python",
    description:
      "A versatile programming language known for its readability and broad range of applications from web development to data science.",
    link: "#",
  },
  {
    title: "MySQL",
    description:
      "A relational database management system known for its reliability, performance, and ease of use.",
    link: "#",
  },
  {
    title: "WordPress",
    description:
      "A content management system (CMS) for creating and managing websites with extensive themes and plugins.",
    link: "#",
  },
  {
    title: "Express.js",
    description:
      "A minimal and flexible Node.js web application framework for building robust APIs and web applications.",
    link: "#",
  },
  {
    title: "BootStrap/Tailwind",
    description:
      "CSS frameworks that provide pre-designed components and utilities for rapid, responsive web development.",
    link: "#",
  },
  {
    title: "WebSocket.io",
    description:
      "A library for enabling real-time, bidirectional communication between clients and servers over WebSockets.",
    link: "#",
  },
];
