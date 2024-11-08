import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 bg-transparent">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10 rounded-full border-2 border-white" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
                <motion.div whileHover={{ scale: 1.2 }} className="hover:text-blue-500">
                    <FaLinkedin />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="hover:text-gray-500">
                    <FaGithub />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="hover:text-blue-400">
                    <FaTwitter />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="hover:text-pink-500">
                    <FaInstagram />
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
