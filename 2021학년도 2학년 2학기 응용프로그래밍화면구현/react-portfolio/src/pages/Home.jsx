import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "../style.css";
import Header from "../components/Header";
import Profile from "../components/item/Profile";
import Experience from "../components/item/Experience";
import Projects from "../components/item/Projects";
import Links from "../components/item/Links";

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          <Profile />
          <Experience />
          <Projects />
          <Links />
        </motion.ul>
      </AnimateSharedLayout>
    </>
  );
}