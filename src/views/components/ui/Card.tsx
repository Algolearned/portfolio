import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    padding?: "sm" | "md" | "lg";
}

export const Card = ({ children, className = "", hover = true, padding = "md" }: CardProps) => {
    const paddings = { sm: "p-4", md: "p-6", lg: "p-8" };

    return (
        <motion.div
            className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm ${paddings[padding]} ${hover ? "hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-500/20" : ""} transition-all duration-300 ${className}`}
            whileHover={hover ? { y: -4 } : undefined}
        >
            {children}
        </motion.div>
    );
};