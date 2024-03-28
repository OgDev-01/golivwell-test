import { cn } from "@/libs/utils";
import Title from "../Typography/Title";
import Text from "../Typography/Text";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export interface FeatureCardProps {
  title: string;
  description: string;
  type: "building" | "design" | "development";
  href: string;
}
export default function FeatureCard({
  type,
  title,
  description,
  href,
}: FeatureCardProps) {
  const iconMap = {
    building: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M246 152a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6M56 70h18v18a6 6 0 0 0 12 0V70h18a6 6 0 0 0 0-12H86V40a6 6 0 0 0-12 0v18H56a6 6 0 0 0 0 12m128 124h-10v-10a6 6 0 0 0-12 0v10h-10a6 6 0 0 0 0 12h10v10a6 6 0 0 0 12 0v-10h10a6 6 0 0 0 0-12m33.9-115.41L78.58 217.9a14 14 0 0 1-19.8 0l-20.69-20.69a14 14 0 0 1 0-19.8L177.41 38.1a14 14 0 0 1 19.8 0l20.69 20.69a14 14 0 0 1 0 19.8M167.51 112L144 88.49L46.58 185.9a2 2 0 0 0 0 2.83l20.69 20.68a2 2 0 0 0 2.82 0Zm41.9-44.73l-20.68-20.68a2 2 0 0 0-2.83 0L152.48 80L176 103.52l33.41-33.42a2 2 0 0 0 0-2.83"
        />
      </svg>
    ),
    design: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M216 48v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M80 40H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8m128 128h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8m-128 0H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8"
            opacity="0.2"
          />
          <path d="M208 96a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v64h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8V96Zm-32-48h32v32h-32ZM48 48h32v15.9a.51.51 0 0 0 0 .2V80H48Zm32 160H48v-32h32v15.9a.51.51 0 0 0 0 .2zm128 0h-32v-32h32Zm-24-48h-8a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16h-8V96h8a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h8Z" />
        </g>
      </svg>
    ),
    development: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 32l80.34 44l-29.77 16.3l-80.35-44Zm0 88L47.66 76l33.9-18.56l80.34 44ZM40 90l80 43.78v85.79l-80-43.75Zm176 85.78l-80 43.79v-85.75l32-17.51V152a8 8 0 0 0 16 0v-44.45L216 90v85.77Z"
        />
      </svg>
    ),
  };
  const getIconColor = (type: string) => {
    switch (type) {
      case "building":
        return "bg-red-100 text-red-500";
      case "design":
        return "bg-green-20 text-green-500";
      case "development":
        return "bg-yellow-100 text-yellow-500";
    }
  };

  return (
    <div className="rounded-xl bg-white drop-shadow-2xl py-8 px-6 flex flex-col gap-6 items-center border border-blue-50/60">
      <div className={cn(getIconColor(type), "p-4 rounded-xl w-max")}>
        {iconMap[type]}
      </div>
      <Title level={3} className="text-xl font-semibold text-center">
        {title}
      </Title>
      <Text className="text-center">{description}</Text>

      <Link
        className="flex items-center gap-2 text-green-100 font-medium"
        href={href}
      >
        Learn more <BsArrowRight />
      </Link>
    </div>
  );
}
