import { motion } from "framer-motion";
export default function Experience() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <br></br>
            <b>🔥 Experience</b><br></br><br></br>
            4th place - Cyber Operation Competition 2020 Final<br></br>
            6th place - KERIS CTF 2020 Final<br></br>
            2nd place - JBU CTF 2020<br></br>
            6th place - The Hacking Championship Junior 2020<br></br>
            3rd place - WITHCON CTF 2021 Final<br></br>
            2nd place - The Hacking Championship Junior 2021 Final<br></br>
        </motion.div>
    );
}