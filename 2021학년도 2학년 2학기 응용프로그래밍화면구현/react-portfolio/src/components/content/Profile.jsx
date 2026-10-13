import { motion } from "framer-motion";
export default function Profile() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <br></br>
            <b>👨‍💻 Profile</b><br></br><br></br>
            KDMHS 19WP | Backend Developer<br></br>
            Studying programming and cybersecurity
        </motion.div>
    );
}