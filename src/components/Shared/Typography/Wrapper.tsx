import { cn } from "@/libs/utils";

interface TypographyWrapperProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl" | "2xl";
}

const TypographyWrapper: React.FC<TypographyWrapperProps> = ({
  children,
  className,
  size = "sm",
  ...props
}) => {
  return (
    <span className={cn("prose", `prose-${size}`, className)} {...props}>
      {children}
    </span>
  );
};

export default TypographyWrapper;
