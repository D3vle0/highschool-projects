import { useState } from "react";
import Experience from "../content/Experience";
import { motion, AnimatePresence } from "framer-motion";

export default function Item2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} whileTap={{ scale: 0.95 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Experience />}</AnimatePresence>
        </motion.li>
    );
}