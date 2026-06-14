// ViewModel: Contact form state, validation, submission logic
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { ContactFormData } from "../models/types";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(20, "Message must be at least 20 characters"),
});

export const useContact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            // Replace with your actual API call / EmailJS / Formspree
            await new Promise((res) => setTimeout(res, 1500));
            console.log("Form submitted:", data);
            setSubmitStatus("success");
            form.reset();
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    return { form, isSubmitting, submitStatus, onSubmit: form.handleSubmit(onSubmit) };
};