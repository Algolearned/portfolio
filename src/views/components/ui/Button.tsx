import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    href?: string;
    download?: boolean;
}

export const Button = ({
    children, variant = "primary", size = "md",
    onClick, type = "button", disabled, className = "", href, download,
}: ButtonProps) => {
    const base = "inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer";

    const variants = {
        primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40",
        secondary: "bg-accent-600 hover:bg-accent-700 text-white shadow-lg shadow-accent-500/25",
        outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
        ghost: "text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                download={download}
                target={download ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={classes}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
            {children}
        </motion.button>
    );
};