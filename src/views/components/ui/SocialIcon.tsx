import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { Mail } from "lucide-react";

interface SocialIconProps {
    icon: string;
    className?: string;
}

export const SocialIcon = ({ icon, className = "w-5 h-5" }: SocialIconProps) => {
    switch (icon) {
        case "Github":
            return <FaGithub className={className} />;
        case "Linkedin":
            return <FaLinkedin className={className} />;
        case "Mail":
            return <Mail className={className} />;
        default:
            return null;
    }
};