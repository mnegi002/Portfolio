"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
 
  {
    title: "Investment Calculator",
    link: "https://reactinvestmentcalculator.netlify.app/",
    thumbnail:
      "/images/investment-calci.png",
  },
  {
    title: "Movie Finder",
    link: "https://reactbasedmoviefinder.netlify.app/",
    thumbnail:
      "/images/movie-finder.png",
  },
  {
    title: "CafeEase - Food Ordering Website",
    link: "https://cafeeasefoodording.netlify.app/",
    thumbnail:
      "/images/cafeease.png",
  },
  {
    title: "Timer Game",
    link: "https://reacttimergame.netlify.app/",
    thumbnail:
      "/images/timer-game.png",
  },
  {
    title: "Weather App",
    link: "https://mnegi002.github.io/weather-app/",
    thumbnail:
      "/images/weather.png",
  },
  {
    title: "Recipe Finder",
    link: "https://newrecipefinder.netlify.app/",
    thumbnail:
      "/images/recipe.png",
  },
  {
    title: "Google Keep Clone",
    link: "https://reactbasedgooglekeepclone.netlify.app/",
    thumbnail:
      "/images/googlekeep.png",
  },
  {
    title: "Amazon Clone",
    link: "https://mnegi002.github.io/amazon_clone/",
    thumbnail:
      "/images/amazon.png",
  },

  {
    title: "ToDo List",
    link: "https://reactbasedtodolist.netlify.app/",
    thumbnail:
      "/images/ToDo_list.png",
  },
];
