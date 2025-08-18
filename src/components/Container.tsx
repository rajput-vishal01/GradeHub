import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-4xl mx-auto px-4 md:py-8", className)}>
      {children}
    </div>
  );
};

export default Container;
