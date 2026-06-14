// ViewModel: Handles scroll-based active section tracking
import { useState, useEffect } from "react";
import { navItems } from "../models/data";

export const useNavigation = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navItems.map((item) => item.href.replace("#", ""));
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return {
        navItems,
        activeSection,
        isScrolled,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        scrollToSection,
    };
};