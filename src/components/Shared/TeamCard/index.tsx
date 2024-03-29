import Image from "next/image";
import Title from "../Typography/Title";
import Text from "../Typography/Text";
import SocialIcon from "../SocialIcon";

export interface TeamCardProps {
  name: string;
  role: string;
  avatar: string;
  socials: {
    name: "twitter" | "dribbble" | "instagram";
    url: string;
  }[];
}

export default function TeamCard({
  name,
  role,
  avatar,
  socials,
}: TeamCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white drop-shadow-2xl ">
      <div className="relative w-full h-64">
        <Image
          src={avatar}
          alt={name}
          fill
          className="top-0 right-0 h-40 object-cover"
        />
      </div>
      <div className="py-4 border-b">
        <Title className="text-center font-semibold">{name}</Title>
        <Text className="text-center font-light">{role}</Text>
      </div>
      <div className="py-6 grid place-content-center grid-flow-col gap-3">
        {socials.map(({ name, url }) => (
          <SocialIcon isTeam key={name} platform={name} href={url} />
        ))}
      </div>
    </div>
  );
}
