// ============================================
// MODEL LAYER — Pure data shape definitions
// No UI, no hooks, no JSX — just TypeScript
// ============================================

export interface PersonalInfo {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    avatar: string;
    resumeUrl: string;
    yearsOfExperience?: number;
    projectsCompleted?: number;
    happyClients?: number;
}

export interface SocialLink {
    id: string;
    platform: string;
    url: string;
    icon: string;
}

export interface Skill {
    id: string;
    name: string;
    level: number; // 0–100
    category: "frontend" | "backend" | "database" | "devops" | "tools" | "mobile";
    icon?: string;
}

export interface SkillCategory {
    label: string;
    value: Skill["category"];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    category: string;
    year: number;
}

export interface WorkExperience {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
    current: boolean;
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    period: string;
    gpa?: string;
    honors?: string;
    description: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer?: string;
    date?: string;
    credentialId?: string;
    url?: string;    // ← add this back
    image?: string;
}


export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface NavItem {
    id: string;
    label: string;
    href: string;
}