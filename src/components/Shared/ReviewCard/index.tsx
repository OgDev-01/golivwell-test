import Image from "next/image";
import Title from "../Typography/Title";
import Text from "../Typography/Text";
import Ratings from "../Rating";
import { truncateText } from "@/libs/utils";

interface ReviewCardProps {
  review: string;
  rating: number;
  reviewer: {
    name: string;
    avatar: string;
    occupation: string;
  };
}
export default function ReviewCard({
  reviewer,
  review,
  rating,
}: ReviewCardProps) {
  return (
    <div className="drop-shadow-2xl bg-white flex flex-col md:flex-row lg:flex-col items-center px-8 py-10 gap-4 rounded-xl border border-[#E5F4F2]">
      <div className="flex-1 flex flex-col gap-1.5 items-center">
        <Image
          src={reviewer.avatar}
          className="rounded-full w-12 h-12"
          alt="Reviewer avatar"
          width={48}
          height={48}
        />
        <Title>{reviewer.name}</Title>
        <Text className="font-light text-xs">{reviewer.occupation}</Text>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <Text className="text-center font-light text-sm md:text-left lg:text-center">
          {truncateText(review, 180)}
        </Text>
        <div className="flex justify-center md:justify-start lg:justify-center">
          <Ratings value={rating} />
        </div>
      </div>
    </div>
  );
}
