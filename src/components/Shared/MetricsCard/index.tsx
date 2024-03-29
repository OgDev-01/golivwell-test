import { humanizeNumber } from "@/libs/utils";
import React from "react";
import Title from "../Typography/Title";
import Text from "../Typography/Text";

interface MetricsCardProps {
  title: string;
  value: number;
}
export default function MetricsCard({ title, value }: MetricsCardProps) {
  return (
    <div className="flex flex-col bg-white drop-shadow-2xl gap-2 text-center items-center py-6 h-max md:py-10 px-5 rounded-t-2xl border-b-4 border-[#F2BFAF]">
      <Title level={4} className="font-bold text-2xl">
        {humanizeNumber(value)}+
      </Title>
      <Text className="font-light">{title}</Text>
    </div>
  );
}
