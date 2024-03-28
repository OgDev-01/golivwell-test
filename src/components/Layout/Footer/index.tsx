import SocialIcon, { SocialIconProps } from "@/components/Shared/SocialIcon";
import Text from "@/components/Shared/Typography/Text";

export default function Footer() {
  const footerSocials: SocialIconProps[] = [
    { platform: "youtube", href: "#" },
    { platform: "instagram", href: "#" },
    { platform: "github", href: "#" },
    { platform: "linkedin", href: "#" },
  ];
  return (
    <footer className="bg-dark text-white">
      <div className="container py-6 flex justify-between">
        <Text className="text-white text-sm">
          © 2023 Anima’s Landing Page Ui Kit.
        </Text>
        <div className="flex items-center gap-3 text-xl">
          {footerSocials.map(({ platform, href }) => (
            <SocialIcon key={platform} platform={platform} href={href} />
          ))}
        </div>
      </div>
    </footer>
  );
}
