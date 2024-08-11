"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <>
      <div className="flex justify-center m-10">
        <h1>Personal Projects</h1>
      </div>
      <TracingBeam className="px-6">
        <div className=" mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-xl mb-4">{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const dummyContent = [
  {
    title: "CafeEase - Food Ordering Website",
    description: (
      <>
        <p className="m-5">
          Project Overview: <br />
          CafeEase is a food ordering website designed to provide a seamless and
          user-friendly experience for customers to browse, select, and order
          food online from various restaurants.
        </p>
        <p className="m-5">
          Tech Stack: <br />
          Built using the MERN stack (MongoDB, Express.js, React.js, Node.js),
          ensuring a robust and scalable application with modern web
          technologies.
        </p>
        <p className="m-5">
          Key Features:
          <br />
          JWT Authentication: Secure user authentication and authorization to
          protect user data and manage sessions effectively. <br/>
          Stripe Payment Gateway: Integrated payment system for secure and convenient online
          transactions.
        </p>
      </>
    ),
    badge: "React",
    image: "/images/cafeease.png",
  },
  {
    title: "Investment Calculator",
    description: (
      <>
        <p className="m-5">
          Project Overview: <br />
          The Investment Calculator is a web application designed to help users
          calculate the potential returns on their investments. It allows users
          to input various parameters and see detailed projections based on
          their investment plans.
        </p>
        <p className="m-5">
          Tech Stack: <br />
          Developed using React.js, ensuring a responsive and dynamic user
          interface with efficient state management and rendering.
        </p>
        <p className="m-5">
          Key Features:
          <br />Interactive UI: Provides an intuitive and interactive user
          interface for calculating and visualizing investment returns.<br/>
          Real-time Calculations: Updates results in real-time as users
          input or adjust parameters, enhancing the user experience.
        </p>
      </>
    ),
    badge: "React",
    image: "/images/investment-calci.png",
  },
  {
    title: "Timer Game",
    description: (
      <>
        <p className="m-5">
          Project Overview: <br />
          The Timer Game is an engaging web-based game where users compete to
          complete tasks within a set time limit. 
        </p>
        <p className="m-5">
          Tech Stack: <br />
          Built using React.js, ensuring a dynamic and interactive user
          interface 
        </p>
        <p className="m-5">
          Key Features:
          <br />Score Provider: Provide scores based on the timer. 
        </p>
      </>
    ),
    badge: "React",
    image: "/images/timer-game.png",
  },
  {
    title: "Movie Finder",
    description: (
      <>
        <p className="m-5">
          Project Overview: <br />
          Movie Finder is a web application that allows users to search for
          movies, view detailed information, and browse through a list of
          popular and trending films. It provides a simple and intuitive
          interface for movie enthusiasts to discover new films.
        </p>
        <p className="m-5">
          Tech Stack: <br />
          Developed using React, with Axios utilized for efficient API fetching
          to retrieve movie data from a public API. This setup ensures a dynamic
          and responsive user experience.
        </p>
        <p className="m-5">
          Key Features:
          <br />API Integration: Axios is used to fetch real-time movie
          data from an external API, providing up-to-date information on movies.
          <br/>Search Functionality: Users can search for movies by title, with
          results displayed in an organized and visually appealing manner. -
          <br/>Detailed Movie Information: Click on a movie to view detailed
          information, including cast, plot, and ratings.
        </p>
      </>
    ),
    badge: "React",
    image: "/images/movie-finder.png",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: (
      <>
        <p className="m-5">
          Project Overview: <br />
          Tic-Tac-Toe Game is a classic two-player game built with a modern and
          responsive interface. Players can engage in a game of Tic-Tac-Toe with
          a clean and intuitive design, and the game tracks and displays each
          move made by the players.
        </p>
        <p className="m-5">
          Tech Stack: <br />
          Developed using React to ensure a dynamic and interactive user
          experience. The game logic is implemented in a modular and
          maintainable way, showcasing React&apos;s capability for handling state and
          rendering updates.
        </p>
        <p className="m-5">
          Key Features:
          <br />- Interactive UI: The game features a well-designed
          interface with clear and responsive elements for an engaging user
          experience. <br/> Move Tracking: Each move made by the players is
          displayed in a move history list, allowing players to review and track
          the progression of the game. <br/>Responsive Design: The game is
          fully responsive, ensuring that it looks and works well on different
          screen sizes and devices.
        </p>
      </>
    ),
    badge: "React",
    image: "/images/tictactie.png",
  },
  {
    title: "WeChat - Real-Time Chat Application",
    description: (
      <>
        <p className="m-5">
          Project Overview: <br />
          WeChat is a real-time chat application designed to enable users to
          connect and communicate seamlessly. It allows users to join chat
          rooms, send and receive messages instantly, and see notifications when
          users join or leave the chat.
        </p>
        <p className="m-5">
          Tech Stack: <br />
          Built using Node.js and WebSocket.io for real-time communication,
          ensuring a responsive and interactive chat experience.
        </p>
        <p className="m-5">
          Key Features: <br />Real-Time Messaging: Enables instant message
          exchange between users with real-time updates. 
        </p>
      </>
    ),
    badge: "Node.js",
    image: "/images/chat.png",
  },
  {
    title: "Amazon Clone",
    description: (
      <>
        <p className="m-5">
          Project Overview: <br />
          The Amazon Clone is a web application designed to replicate the core
          features of Amazon&apos;s online shopping platform. It offers a
          user-friendly interface for browsing products, adding items to the
          cart, and managing orders.
        </p>
        <p className="m-5">
          Tech Stack: <br />
          Built using HTML and CSS, providing a clean and responsive layout that
          mimics the structure of a modern e-commerce website.
        </p>
        <p className="m-5">
          Key Features:
          <br />Responsive Design: The website adjusts seamlessly to
          various screen sizes, ensuring a smooth shopping experience on both
          desktop and mobile devices. <br/>Product Layout: Features a
          grid-based layout for product listings, with easy navigation and a
          visually appealing design.
        </p>
      </>
    ),
    badge: "HTML/CSS",
    image: "/images/amazon.png",
  },
];
