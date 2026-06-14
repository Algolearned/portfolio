import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../../viewmodels/useTheme";
import { useNavigation } from "../../../viewmodels/useNavigation";
import rlogo from "../../../assets/rlogo.png";

export const Navbar = () => {
    const { isDark, toggle } = useTheme();
    const { navItems, activeSection, isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection } = useNavigation();

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800"
                : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.button
                        onClick={() => scrollToSection("#home")}
                        className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="h-10 w-10 bg-linear-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center overflow-hidden p-1.5">
                            <img src={rlogo} alt="Logo" className="h-full w-full object-contain brightness-0 invert" />
                        </div>
                        <span className="gradient-text">Russel Jean</span>
                    </motion.button>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.slice(0, 7).map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.href)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.href.replace("#", "")
                                    ? "text-primary-500 bg-primary-50 dark:bg-primary-900/20"
                                    : "text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <motion.button
                            onClick={toggle}
                            className="p-2 rounded-lg text-gray-500 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </motion.button>

                        <motion.button
                            onClick={() => scrollToSection("#contact")}
                            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Hire Me
                        </motion.button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 shadow-xl"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === item.href.replace("#", "")
                                        ? "text-primary-500 bg-primary-50 dark:bg-primary-900/20"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};