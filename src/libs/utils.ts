import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function humanizeNumber(num: number) {
  if (num < 1000) {
    return num;
  }
  const si = ["K", "M", "G", "T", "P", "H"];
  const exp = Math.floor(Math.log(num) / Math.log(1000));
  const result = (num / Math.pow(1000, exp)).toFixed(0);
  return result + si[exp - 1];
}

export function truncateText(text: string, length: number) {
  return text.length > length ? text.slice(0, length) + "..." : text;
}
