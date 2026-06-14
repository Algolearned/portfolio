import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { SocialIcon } from "../ui/SocialIcon";
import { usePortfolio } from "../../../viewmodels/usePortfolio";
import { Button } from "../ui/Button";
import { fadeInUp, staggerChildren } from "../../../utils/helpers";


export const HeroSection = () => {
    const { personalInfo, socialLinks } = usePortfolio();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute inset-0 grid-overlay" />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[72px_72px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        variants={staggerChildren}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 justify-center lg:justify-start mb-6">
                            <div className="flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full">
                                <Sparkles className="w-4 h-4 text-primary-400" />
                                <span className="text-primary-400 text-sm font-medium">Available for work</span>
                            </div>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                            Hi, I'm{" "}
                            <span className="gradient-text">{personalInfo.name}</span>
                        </motion.h1>

                        <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6">
                            <span className="font-mono text-primary-400">{">"}</span> {personalInfo.title}
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
                            {personalInfo.subtitle}
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10">
                            <Button
                                size="lg"
                                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                View My Work
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                href={personalInfo.resumeUrl}
                                download
                                className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900"
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </Button>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center lg:justify-start">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white rounded-xl transition-all duration-200"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={link.platform}
                                >
                                    <SocialIcon icon={link.icon} className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Avatar */}
                    <motion.div
                        className="shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-br from-primary-500 to-accent-500 rounded-full blur-2xl opacity-40 scale-110" />
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-primary-500/30 overflow-hidden">
                                <img
                                    src={personalInfo.avatar}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Stats bubbles */}
                            <motion.div
                                className="absolute -bottom-4 -left-8 bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3 shadow-xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="text-xs font-black text-white">Building</div>
                                <div className="text-gray-400 text-xs">Digital Ideas</div>
                            </motion.div>
                            <motion.div
                                className="absolute -top-4 -right-8 bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3 shadow-xl"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                            >
                                <div className="text-xs font-black text-white">explore</div>
                                <div className="text-gray-400 text-xs">My works</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span className="text-xs font-mono">scroll down</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ArrowDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};