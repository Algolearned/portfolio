import { motion } from "framer-motion";

interface SectionHeaderProps {
    label: string;
    title: string;
    description?: string;
    centered?: boolean;
}

export const SectionHeader = ({ label, title, description, centered = true }: SectionHeaderProps) => (
    <motion.div
        className={`mb-16 ${centered ? "text-center" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <span className="inline-block text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase mb-3">
            {label}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
        </h2>
        {description && (
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                {description}
            </p>
        )}
        <div className={`mt-4 h-1 w-16 bg-linear-to-r from-primary-500 to-accent-500 rounded-full ${centered ? "mx-auto" : ""}`} />
    </motion.div>
);