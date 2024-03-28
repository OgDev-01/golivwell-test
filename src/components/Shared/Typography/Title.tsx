import { Poppins } from "next/font/google";
import { cn } from "@/libs/utils";
import TypographyWrapper from "./Wrapper";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  title?: string;
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  level = 1,
  weight = "medium",
  className,
  ...props
}) => {
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <TypographyWrapper>
      <TitleTag
        className={cn(`font-${weight}`, poppins.className, className)}
        {...props}
      >
        {children}
      </TitleTag>
    </TypographyWrapper>
  );
};

export default Title;
