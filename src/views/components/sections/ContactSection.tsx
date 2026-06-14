import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { useContact } from "../../../viewmodels/useContact";
import { usePortfolio } from "../../../viewmodels/usePortfolio";
import { staggerChildren, fadeInLeft, fadeInRight } from "../../../utils/helpers";

export const ContactSection = () => {
    const { form, isSubmitting, submitStatus, onSubmit } = useContact();
    const { personalInfo } = usePortfolio();
    const { register, formState: { errors } } = form;

    const inputClass = (hasError?: boolean) =>
        `w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${hasError ? "border-red-500" : "border-gray-200 dark:border-gray-700"
        } rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`;

    return (
        <section id="contact" className="section-padding bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    label="Get in touch"
                    title="Contact Me"
                    description="Have a project in mind? I'd love to hear from you. Send me a message and I'll get back to you within 24 hours."
                />

                <motion.div
                    className="grid lg:grid-cols-2 gap-12"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Info */}
                    <motion.div variants={fadeInLeft as any}>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Let's work together on something{" "}
                            <span className="gradient-text">great</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Whether you have a project, a question, or just want to say hi — my inbox is always open.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                { icon: Mail, label: "Email", value: personalInfo.email },
                                { icon: Phone, label: "Phone", value: personalInfo.phone },
                                { icon: MapPin, label: "Location", value: personalInfo.location },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                                        <Icon className="w-5 h-5 text-primary-500" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-linear-to-br from-primary-600 to-accent-600 rounded-2xl text-white">
                            <h4 className="font-bold text-lg mb-2">Available for freelance</h4>
                            <p className="text-white/80 text-sm">Currently accepting new projects. Let's build something amazing together!</p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div variants={fadeInRight}>
                        <form onSubmit={onSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <input {...register("name")} placeholder="Your Name" className={inputClass(!!errors.name)} />
                                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <input {...register("email")} type="email" placeholder="Your Email" className={inputClass(!!errors.email)} />
                                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div>
                                <input {...register("subject")} placeholder="Subject" className={inputClass(!!errors.subject)} />
                                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                            </div>

                            <div>
                                <textarea
                                    {...register("message")}
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    className={inputClass(!!errors.message)}
                                />
                                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                            </div>

                            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full justify-center">
                                {isSubmitting ? (
                                    <>
                                        <motion.div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                            animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} />
                                        Sending...
                                    </>
                                ) : (
                                    <><Send className="w-4 h-4" /> Send Message</>
                                )}
                            </Button>

                            {submitStatus === "success" && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl">
                                    <CheckCircle className="w-5 h-5" />
                                    Message sent! I'll get back to you within 24 hours.
                                </motion.div>
                            )}
                            {submitStatus === "error" && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl">
                                    <AlertCircle className="w-5 h-5" />
                                    Something went wrong. Please try again.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};