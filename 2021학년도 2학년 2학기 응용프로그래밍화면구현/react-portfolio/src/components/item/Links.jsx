import { useState } from "react";
import Links from "../content/Links";
import { motion, AnimatePresence } from "framer-motion";

export default function Item4() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} whileTap={{ scale: 0.95 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Links />}</AnimatePresence>
        </motion.li>
    );
}