import { motion } from "framer-motion";
import { ExternalLink, Share2, Star } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { usePortfolio } from "../../../viewmodels/usePortfolio";
import { staggerChildren, fadeInUp } from "../../../utils/helpers";

export const ProjectsSection = () => {
    const { projects    } = usePortfolio();

    return (
        <section id="projects" className="section-padding bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    label="What I've built"
                    title="Projects Showcase"
                    description="A selection of projects that demonstrate my skills and passion for building great software."
                />


                {/* Projects grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    layout
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={fadeInUp} layout>
                            <Card className="h-full flex flex-col overflow-hidden p-0! group" hover>
                                {/* Image */}
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 g-linear-to-t from-black/60 to-transparent" />
                                    {project.featured && (
                                        <div className="absolute top-3 left-3">
                                            <Badge variant="accent" className="flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-current" /> Featured
                                            </Badge>
                                        </div>
                                    )}
                                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                                className="p-2 bg-black/50 hover:bg-black text-white rounded-lg transition-colors"
                                                onClick={(e) => e.stopPropagation()}>
                                                <Share2 className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                                className="p-2 bg-black/50 hover:bg-primary-600 text-white rounded-lg transition-colors"
                                                onClick={(e) => e.stopPropagation()}>
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{project.title}</h3>
                                        <span className="text-xs text-gray-500">{project.year}</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <Badge key={tag} variant="primary" className="text-xs">{tag}</Badge>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <Badge className="text-xs">+{project.tags.length - 4}</Badge>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};