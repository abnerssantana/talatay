import Link from "next/link";
import Button from "../button";
import { GridItemInterface } from "@/config/site-config";
import { IconType } from "react-icons";
import { useTheme } from "next-themes";
import { 
  FaWhatsapp, FaInstagram, FaYoutube, FaDiscord, FaGithub, 
  FaStrava, FaMagic, FaLinkedin, FaCode, FaCalculator 
} from "react-icons/fa";

const Social = ({ item }: { item: GridItemInterface }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const iconComponents: { [key: string]: IconType } = {
    whatsapp: FaWhatsapp,
    instagram: FaInstagram,
    youtube: FaYoutube,
    discord: FaDiscord,
    github: FaGithub,
    strava: FaStrava,
    magic: FaMagic,
    linkedin: FaLinkedin,
    code: FaCode,
    calc: FaCalculator
  };

  const IconComponent = item.icon && iconComponents[item.icon];

  const getThemeColor = (color?: string, colorDark?: string) => {
    if (!color) return "#fff";
    return isDark && colorDark ? colorDark : color;
  };

  return (
    <Link href={item.buttonLink ?? ""} target="_blank">
      {/* Header */}
      <div className="flex items-center justify-between">
        {item.icon && IconComponent && (
          <IconComponent
            color={getThemeColor(item.color, item.colorDark)}
            style={{ fontSize: "34px" }}
          />
        )}
        {item.layout === "2x2" && (
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={getThemeColor(item.color, item.colorDark)}
          />
        )}
      </div>
      {/* Content */}
      <div className="mt-1">
        <div className="@lg:text-lg font-semibold line-clamp-1">
          {item.title} <span className="ml-1 text-sm font-normal text-neutral-600 dark:text-slate-200">{item.username}</span>
        </div>
        {item.description && (
          <div className="mt-1 mb-2 text-sm text-neutral-600 dark:text-neutral-50 line-clamp-2">
            {item.description}
          </div>
        )}
        {item.layout === "1x2" && (
          <div className="mt-2">
            <Button
              text={item.buttonTitle ?? ""}
              secondaryText={item.buttonSecondaryText}
              color={getThemeColor(item.color, item.colorDark)}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Social;