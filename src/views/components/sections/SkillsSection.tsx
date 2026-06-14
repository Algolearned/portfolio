import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { usePortfolio } from "../../../viewmodels/usePortfolio";
import { staggerChildren, fadeInUp } from "../../../utils/helpers";

export const SkillsSection = () => {
    const { skills, } = usePortfolio();

    return (
        <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    label="What I work with"
                    title="Skills & Technologies"
                    description="A comprehensive overview of my technical toolkit built over years of hands-on experience."
                />



                {/* Skills grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            variants={fadeInUp}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:border-primary-500/30 transition-all duration-300"
                            whileHover={{ y: -3 }}
                        >
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                                <span className="text-sm font-bold text-primary-500">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-linear-to-r from-primary-500 to-accent-500 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                />
                            </div>
                            <div className="mt-2">
                                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md capitalize">
                                    {skill.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};