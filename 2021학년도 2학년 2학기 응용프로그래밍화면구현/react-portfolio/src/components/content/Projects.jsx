import { motion } from "framer-motion";
export default function Projects() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <br></br>
        <b>📝 Projects</b><br></br><br></br>
        <a href="https://c-edu.devleo.tech" target="_blank" rel="noreferrer">C Language Basic Lecture (2018)</a><br></br>
        <a href="https://github.com/d3vle0/comjipsa" target="_blank" rel="noreferrer">Comjipsa (2018)</a><br></br>
        <a href="https://github.com/d3vle0/leo-bot" target="_blank" rel="noreferrer">Discord leo-bot (2020)</a><br></br>
        <a href="https://github.com/d3vle0/disk-scheduling" target="_blank" rel="noreferrer">Disk Scheduling Calculator (2020)</a><br></br>
        <a href="https://github.com/d3vle0/ecogate-router" target="_blank" rel="noreferrer">Ecogate Mobile Router Helper (2021)</a><br></br>
        <a href="https://github.com/d3vle0/spicetify-helper" target="_blank" rel="noreferrer">Spicetify Helper (2021)</a><br></br>
      </motion.div>
    );
  }