import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import ProgressBar3 from "./skillbar.jsx";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Technology = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const headingVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.7, delay: 0.5 } },
    };

    const iconVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.7, delay: 0.5 } },
    };

    const barVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.7, delay: 0.5 } },
    };

    return (
        <div className="pb-24">
            <motion.h2
                className="my-20 text-center text-4xl"
                initial="hidden"
                animate={controls}
                variants={headingVariants}
            >
                Technologies
            </motion.h2>
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-10 w-full justify-center">
                    <motion.div
                        ref={ref}
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                        initial="hidden"
                        animate={controls}
                        variants={iconVariants}
                    >
                        <FaHtml5 className="text-4xl text-orange-400" />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        className="w-1/3"
                        initial="hidden"
                        animate={controls}
                        variants={barVariants}
                    >
                        <ProgressBar3 skill="HTML/CSS" level="90%" />
                    </motion.div>
                </div>
                <div className="flex items-center gap-10 w-full justify-center">
                    <motion.div
                        ref={ref}
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                        initial="hidden"
                        animate={controls}
                        variants={iconVariants}
                        transition={{ delay: 0.4 }}
                    >
                        <RiTailwindCssFill className="text-4xl text-sky-400" />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        className="w-1/3"
                        initial="hidden"
                        animate={controls}
                        variants={barVariants}
                        transition={{ delay: 0.4 }}
                    >
                        <ProgressBar3 skill="Tailwind CSS" level="90%" />
                    </motion.div>
                </div>
                <div className="flex items-center gap-10 w-full justify-center">
                    <motion.div
                        ref={ref}
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                        initial="hidden"
                        animate={controls}
                        variants={iconVariants}
                        transition={{ delay: 0.6 }}
                    >
                        <TbBrandJavascript className="text-4xl text-yellow-400" />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        className="w-1/3"
                        initial="hidden"
                        animate={controls}
                        variants={barVariants}
                        transition={{ delay: 0.6 }}
                    >
                        <ProgressBar3 skill="JavaScript" level="75%" />
                    </motion.div>
                </div>
                <div className="flex items-center gap-10 w-full justify-center">
                    <motion.div
                        ref={ref}
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                        initial="hidden"
                        animate={controls}
                        variants={iconVariants}
                        transition={{ delay: 0.8 }}
                    >
                        <RiReactjsLine className="text-4xl text-cyan-400" />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        className="w-1/3"
                        initial="hidden"
                        animate={controls}
                        variants={barVariants}
                        transition={{ delay: 0.8 }}
                    >
                        <ProgressBar3 skill="React" level="70%" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
