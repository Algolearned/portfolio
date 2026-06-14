import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";
import { usePortfolio } from "../../../viewmodels/usePortfolio";
import { staggerChildren, fadeInLeft } from "../../../utils/helpers";

export const ExperienceSection = () => {
    const { workExperiences } = usePortfolio();

    return (
        <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <SectionHeader label="Where I've worked" title="Work Experience" />

                <motion.div
                    className="relative"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Timeline line */}
                    <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-500 to-accent-500" />

                    <div className="space-y-8">
                        {workExperiences.map((exp) => (
                            <motion.div key={exp.id} variants={fadeInLeft} className="relative flex gap-6 sm:gap-10 pl-12 sm:pl-20">
                                {/* Timeline dot */}
                                <div className={`absolute left-2 sm:left-6 w-5 h-5 rounded-full border-2 ${exp.current
                                    ? "bg-primary-500 border-primary-500 shadow-lg shadow-primary-500/50"
                                    : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600"
                                    } flex items-center justify-center`} style={{ top: "1.5rem" }}>
                                    {exp.current && (
                                        <motion.div
                                            className="w-2 h-2 bg-white rounded-full"
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        />
                                    )}
                                </div>

                                {/* Card */}
                                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary-500/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                            <div className="text-primary-500 font-semibold">{exp.company}</div>
                                        </div>
                                        <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400 shrink-0">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {exp.location}
                                            </div>
                                            {exp.current && <Badge variant="success" className="self-start">Current</Badge>}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{exp.description}</p>

                                    <ul className="space-y-2 mb-4">
                                        {exp.achievements.map((a, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                                                {a}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((t) => (
                                            <Badge key={t} variant="primary">{t}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};