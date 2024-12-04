"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";
import { HeroImagesData } from "@/lib/data";

const Landing = () => {
  const currentImage = useCarousel({
    totalImages: 3,
    interval: 3000,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
      >
        <div className="landing__hero-content">
          <h1 className="landing__title">Courses</h1>
          <p className="landing__description">
            This si the list of courses you can enroll in.
            <br />
            Courses when you need them and want them
          </p>
          <div className="landing__cta">
            <Link href="/search">
              <div className="landing__cta-button">Search for Courses</div>
            </Link>
          </div>
        </div>
        <div className="landing__hero-images">
          {HeroImagesData.map((src, index) => (
            <Image
              key={index}
              src={src.url}
              alt={src.alt}
              fill
              priority={index === currentImage}
              sizes="(max-width:768px) 100vw , (max-width:1200px) 50vw ,33vw"
              className={`landing__hero-image ${index === currentImage ? "landing__hero-image--active" : ""}`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__featured"
        viewport={{ amount: 0.3, once: true }}
      >
        <h2 className="landing__featured-title">Featured Courses</h2>
        <p className="landing__featured-description">
          Explore our top-rated courses carefully designed to help you build new
          skills, advance your career, and stay ahead in todays competitive
          world. Each course is curated by industry experts to ensure the best
          learning experience.
        </p>
        <div className="landing__tags">
          {[
            "web development",
            "enterprise it",
            "reactjs",
            "nextjs",
            "nestjs",
            "backend development",
          ].map((tag, index) => (
            <span className="landing__tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
