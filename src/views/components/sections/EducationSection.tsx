import { motion } from "framer-motion";
import { GraduationCap, Calendar, Trophy } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { usePortfolio } from "../../../viewmodels/usePortfolio";
import { staggerChildren, scaleIn } from "../../../utils/helpers";

export const EducationSection = () => {
    const { educations } = usePortfolio();

    return (
        <section id="education" className="section-padding bg-white dark:bg-gray-950">
            <div className="max-w-5xl mx-auto">
                <SectionHeader label="Academic background" title="Education" />
                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {educations.map((edu) => (
                        <motion.div key={edu.id} variants={scaleIn}>
                            <Card className="h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl shrink-0">
                                        <GraduationCap className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{edu.institution}</h3>
                                        <div className="text-primary-500 font-semibold text-sm">{edu.degree} in {edu.field}</div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />{edu.period}
                                    </div>
                                    {edu.gpa && (
                                        <div className="flex items-center gap-1.5">
                                            <Trophy className="w-4 h-4 text-yellow-500" /> GPA: {edu.gpa}
                                        </div>
                                    )}
                                </div>

                                {edu.honors && (
                                    <div className="inline-block px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 text-xs rounded-full font-medium mb-3">
                                        🏆 {edu.honors}
                                    </div>
                                )}

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};