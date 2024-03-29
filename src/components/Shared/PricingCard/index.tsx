import { FaCheck } from "react-icons/fa";
import { cn } from "@/libs/utils";
import Text from "../Typography/Text";
import Title from "../Typography/Title";
import Button from "../Button";

interface PricingCardProps {
  title: string;
  price: number;
  excerpt: string;
  features: string[];
  isPopular?: boolean;
}
export default function PricingCard({
  title,
  price,
  excerpt,
  features,
  isPopular,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        " rounded-xl drop-shadow-2xl px-8 py-8 border border-[#F8F9FF]",
        isPopular ? "bg-green-100 text-white" : "bg-white text-dark"
      )}
    >
      <div className="flex flex-col gap-2">
        <Text className={cn(isPopular ?? "text-white")}>{title}</Text>
        <div className="flex items-end gap-2">
          <Title className="text-3xl font-bold">${price}</Title>
          <span className="font-light text-xs mb-1">/ month</span>
        </div>
        <Text className="text-sm font-light">{excerpt}</Text>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {features.map((feature, idx) => (
          <Text
            key={idx}
            className="text-sm font-light flex gap-2 items-center"
          >
            <FaCheck className={cn(!isPopular ?? "text-green-100")} /> {feature}
          </Text>
        ))}
      </div>
      <Button
        className={"mt-8 w-full"}
        variant={isPopular ? "outlined" : "highlight"}
      >
        Get Started
      </Button>
    </div>
  );
}
