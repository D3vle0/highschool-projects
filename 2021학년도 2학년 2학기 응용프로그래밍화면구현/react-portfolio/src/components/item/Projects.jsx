import { useState } from "react";
import Projects from "../content/Projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Item2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} whileTap={{ scale: 0.95 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Projects />}</AnimatePresence>
        </motion.li>
    );
}