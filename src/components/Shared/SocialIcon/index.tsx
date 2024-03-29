import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import {
  FaBehance,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export interface SocialIconProps {
  platform:
    | "linkedin"
    | "twitter"
    | "instagram"
    | "github"
    | "dribbble"
    | "youtube"
    | "behance";
  href: string;
  isTeam?: boolean;
}
export default function SocialIcon({
  href,
  platform,
  isTeam = false,
}: SocialIconProps) {
  const SocialIcon = {
    youtube: <FaYoutube />,
    linkedin: <FaLinkedin />,
    twitter: <FaTwitter />,
    behance: <FaBehance />,
    instagram: <FaInstagram />,
    dribbble: <FaDribbble />,
    github: <FaGithub />,
  };
  return (
    <a
      className={cn(
        "p-2 rounded-full",
        isTeam ? "bg-[#E5F4F2] text-dark" : " bg-[#4E4D4D] text-white"
      )}
      target="_blank"
      href={href}
    >
      {SocialIcon[platform]}
    </a>
  );
}
