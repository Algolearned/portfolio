import { motion } from "framer-motion";
import { MapPin, Mail, Phone, FolderKanban, Award } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { usePortfolio } from "../../../viewmodels/usePortfolio";
import { fadeInLeft, fadeInRight } from "../../../utils/helpers";

export const AboutSection = () => {
    const { personalInfo } = usePortfolio();

    const stats = [

        { icon: FolderKanban, label: "Projects Done", value: `${personalInfo.projectsCompleted}+` },
        { icon: Award, label: "Certifications", value: "10" },
    ];

    return (
        <section id="about" className="section-padding bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <SectionHeader label="Get to know me" title="About Me" />

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image side */}
                    <motion.div
                        className="relative"
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto">
                            <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                        </div>
                        {/* Decorative */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500/20 rounded-2xl -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500/20 rounded-full -z-10" />
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            A passionate developer who loves crafting{" "}
                            <span className="gradient-text">digital experiences</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{personalInfo.bio}</p>

                        {/* Contact details */}
                        <div className="grid sm:grid-cols-2 gap-3 mb-8">
                            {[
                                { icon: Mail, label: "Email", value: personalInfo.email },
                                { icon: Phone, label: "Phone", value: personalInfo.phone },
                                { icon: MapPin, label: "Location", value: personalInfo.location },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                                        <Icon className="w-4 h-4 text-primary-500" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map(({ icon: Icon, label, value }) => (
                                <motion.div
                                    key={label}
                                    className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                                    <div className="text-2xl font-black gradient-text">{value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};