import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "../../../models/data";
import { Flower2 } from "lucide-react";
import { SocialIcon } from "../ui/SocialIcon";
import rlogo from "../../../assets/rlogo.png";



export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2 text-white font-bold text-xl">
                        <div className="h-10 w-10 bg-linear-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center overflow-hidden p-1.5">
                            <img src={rlogo} alt="Logo" className="h-full w-full object-contain brightness-0 invert" />
                        </div>
                        <span className="gradient-text">{personalInfo.name.replace(" ", "")}</span>
                    </div>


                    <p className="text-sm text-center">
                        © {year} {personalInfo.name}. Crafted {" "}
                        <Flower2 className="w-3 h-3 inline text-red-500 fill-current" /> with blooming ideas
                    </p>

                    <div className="flex items-center gap-3">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:text-primary-400 hover:bg-gray-800 transition-all"
                                whileHover={{ scale: 1.15, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.platform}
                            >
                                <SocialIcon icon={link.icon} className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer >
    );
};