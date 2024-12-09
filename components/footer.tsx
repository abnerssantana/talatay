import { ThemeToggle } from "./theme-toggle";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site-config";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-6 border-t border-neutral-100 dark:border-neutral-800">
      <div className="flex items-center justify-between w-full mt-6">
        <div className="text-xs text-neutral-500">
          © 2024 Mauro Brumato. All Rights Reserved
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
