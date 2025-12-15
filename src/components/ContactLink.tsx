import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ContactLinkProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  showArrow?: boolean;
}

const ContactLink = ({ 
  children, 
  className = "", 
  size = "lg", 
  variant = "default",
  showArrow = true 
}: ContactLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      // Already on homepage, just scroll to contact
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage and scroll to contact
      navigate("/?scrollTo=contact");
    }
  };

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-5 h-5" />}
    </Button>
  );
};

export default ContactLink;
