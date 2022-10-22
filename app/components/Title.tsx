import * as React from "react";

type TitleProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

export const TitleH1 = ({ children, color, className }: TitleProps) => {
  return (
    <h1 className={`text-6xl sm:text-9xl font-bold ${color} ${className}`}>{children}</h1>
  );
};

export const TitleH2 = ({ children, color, className }: TitleProps) => {
  return (
    <h2 className={`text-3xl sm:text-5xl font-bold uppercase ${color} ${className}`}>
      {children}
    </h2>
  );
};

export const TitleH3 = ({ children, color, className }: TitleProps) => {
  return (
    <h3 className={`text-xl sm:text-2xl font-bold uppercase ${color} ${className}`}>
      {children}
    </h3>
  );
};
