// ============================================
// VIEWMODEL LAYER — Portfolio data & filters
// ============================================
import { useState, useMemo } from "react";
import {
    personalInfo, socialLinks, skills, projects,
    workExperiences, educations, certifications,


} from "../models/data";
import type { Skill } from "../models/types";

export const usePortfolio = () => {
    const [activeSkillCategory, setActiveSkillCategory] = useState<Skill["category"] | "all">("all");
    const [activeProjectCategory, setActiveProjectCategory] = useState<string>("all");


    const filteredSkills = useMemo(() => {
        if (activeSkillCategory === "all") return skills;
        return skills.filter((s) => s.category === activeSkillCategory);
    }, [activeSkillCategory]);

    const filteredProjects = useMemo(() => {
        if (activeProjectCategory === "all") return projects;
        return projects.filter((p) => p.category === activeProjectCategory);
    }, [activeProjectCategory]);

    const featuredProjects = useMemo(() => projects.filter((p) => p.featured), []);

    const projectCategories = useMemo(() => {
        const cats = ["all", ...Array.from(new Set(projects.map((p) => p.category)))];
        return cats;
    }, []);

    const skillCategories: Array<{ label: string; value: Skill["category"] | "all" }> = [
        { label: "All", value: "all" },
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Database", value: "database" },
        { label: "DevOps", value: "devops" },
        { label: "Tools", value: "tools" },
    ];

    /*     const nextTestimonial = () =>
            setActiveTestimonial((i) => (i + 1) % testimonials.length);
    
        const prevTestimonial = () =>
            setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length); */

    return {
        personalInfo,
        socialLinks,
        skills: filteredSkills,
        allSkills: skills,
        skillCategories,
        activeSkillCategory,
        setActiveSkillCategory,
        projects: filteredProjects,
        featuredProjects,
        projectCategories,
        activeProjectCategory,
        setActiveProjectCategory,
        workExperiences,
        educations,
        certifications,
      
    };
};