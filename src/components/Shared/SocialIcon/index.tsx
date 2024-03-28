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
}
export default function SocialIcon({ href, platform }: SocialIconProps) {
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
      className="text-white p-2 rounded-full bg-[#4E4D4D]"
      target="_blank"
      href={href}
    >
      {SocialIcon[platform]}
    </a>
  );
}
