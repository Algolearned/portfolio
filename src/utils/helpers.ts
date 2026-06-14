export const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long" });

export const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

export const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};