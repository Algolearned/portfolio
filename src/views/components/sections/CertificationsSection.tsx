import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Calendar, X, ZoomIn } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { usePortfolio } from "../../../viewmodels/usePortfolio";
import { staggerChildren, scaleIn } from "../../../utils/helpers";

export const CertificationsSection = () => {
    const { certifications } = usePortfolio();
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [lightboxTitle, setLightboxTitle] = useState<string>("");

    const openLightbox = (image: string, title: string) => {
        setLightboxImage(image);
        setLightboxTitle(title);
        document.body.style.overflow = "hidden"; // prevent background scroll
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        setLightboxTitle("");
        document.body.style.overflow = "unset";
    };

    return (
        <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <SectionHeader label="Credentials" title="Certifications" />

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {certifications.map((cert) => (
                        <motion.div key={cert.id} variants={scaleIn} whileHover={{ y: -6 }}>
                            <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary-500/40 transition-all duration-300 shadow-sm hover:shadow-xl group">

                                {/* External link button */}
                                {cert.url && (
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <a
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors inline-flex"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                )}
                                <div className="w-full rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 flex items-center justify-center p-2">
                                    {cert.image ? (
                                        <div
                                            className="relative w-full cursor-zoom-in"
                                            onClick={() => openLightbox(cert.image!, cert.name)}
                                        >
                                            <img
                                                src={cert.image}
                                                alt={cert.issuer}
                                                className="w-full h-auto object-contain rounded-lg"
                                            />
                                            {/* Hover zoom hint overlay */}
                                            <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-200 rounded-lg flex items-center justify-center">
                                                <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/60 rounded-full p-2">
                                                    <ZoomIn className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full h-32 bg-linear-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                                            <Award className="w-8 h-8 text-white" />
                                        </div>
                                    )}
                                </div>

                                {/* Name */}
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 leading-tight">
                                    {cert.name}
                                </h3>

                                {/* Issuer */}
                                <p className="text-primary-500 text-sm font-medium mb-3">
                                    {cert.issuer}
                                </p>

                                {/* Date */}
                                {cert.date && (
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-2">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {cert.date}
                                    </div>
                                )}

                                {/* Credential ID */}
                                {cert.credentialId && (
                                    <div className="text-xs text-gray-400 dark:text-gray-500 font-mono truncate">
                                        ID: {cert.credentialId}
                                    </div>
                                )}

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        {/* Modal content */}
                        <motion.div
                            className="relative max-w-4xl w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
                        >
                            {/* Close button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Title */}
                            <p className="text-white/70 text-sm text-center mb-3 font-medium">
                                {lightboxTitle}
                            </p>

                            {/* Full image — exact size, no zoom, no crop */}
                            <div className="flex items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6">
                                <img
                                    src={lightboxImage}
                                    alt={lightboxTitle}
                                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
                                />
                            </div>

                            {/* Click outside hint */}
                            <p className="text-white/40 text-xs text-center mt-3">
                                Click outside to close
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
};