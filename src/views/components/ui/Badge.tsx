interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "primary" | "accent" | "success";
    className?: string;
}

export const Badge = ({ children, variant = "default", className = "" }: BadgeProps) => {
    const variants = {
        default: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
        primary: "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300",
        accent: "bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300",
        success: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};