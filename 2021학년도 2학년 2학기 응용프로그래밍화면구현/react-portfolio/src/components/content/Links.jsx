import { motion } from "framer-motion";
export default function Links() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <br></br>
        <b>🔗 Links</b><br></br><br></br>
        <a href="https://devleo.tech" target="_blank" rel="noreferrer">Website</a><br></br>
        <a href="https://blog.devleo.tech" target="_blank" rel="noreferrer">Blog</a><br></br>
        <a href="https://github.com/d3vle0" target="_blank" rel="noreferrer">GitHub</a><br></br>
      </motion.div>
    );
  }
  