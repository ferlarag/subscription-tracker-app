import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}
const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div className={cn(className, "mx-auto max-w-[1440px] px-8")}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
