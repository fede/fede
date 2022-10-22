import * as React from "react";

type ExperienceDescriptionType = {
  title: string;
  color: string;
  children: React.ReactNode;
};

export const ExperienceDescription = ({
  title,
  color,
  children,
}: ExperienceDescriptionType) => {
  return (
    <div className="mt-3 pr-3 lg:mt-6 lg:pr-6">
      <h3 className={`pb-3 pt-4 text-2xl lg:text-5xl font-bold ${color}`}>{title}</h3>
      <div className="text-sm lg:text-2xl lg:leading-relaxed leading-relaxed">
        {children}
      </div>
    </div>
  );
};

type ExperienceCardType = {
  children: React.ReactNode;
};

export const ExperienceCard = ({ children }: ExperienceCardType) => {
  return (
    <div className="block my-2 rounded-md overflow-hidden max-w-5xl">
      <div className="flex flex-row">{children}</div>
    </div>
  );
};
