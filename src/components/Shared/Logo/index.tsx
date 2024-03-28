import { cn } from "@/libs/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default function Logo() {
  return (
    <span className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 9H5C4.44772 9 4 9.44772 4 10V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V10C28 9.44772 27.5523 9 27 9Z"
          stroke="#2D2D2D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 3L16 9L22 3"
          stroke="#2D2D2D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5 16C24.3284 16 25 15.3284 25 14.5C25 13.6716 24.3284 13 23.5 13C22.6716 13 22 13.6716 22 14.5C22 15.3284 22.6716 16 23.5 16Z"
          fill="#2D2D2D"
        />
        <path
          d="M23.5 22C24.3284 22 25 21.3284 25 20.5C25 19.6716 24.3284 19 23.5 19C22.6716 19 22 19.6716 22 20.5C22 21.3284 22.6716 22 23.5 22Z"
          fill="#2D2D2D"
        />
        <path
          d="M19 26V9"
          stroke="#2D2D2D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className={cn(poppins.className, "text-2xl")}>
        <strong className="font-bold">Landing</strong>
        Page
      </p>
    </span>
  );
}
