import * as React from "react";
import { TitleH3 } from "./Title";

type FlexRowTypes = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const FlexRow = ({ title, children }: FlexRowTypes) => {
  return (
    <div className="flex flex-col sm:flex-row mt-4 mb-4">
      <div className="pr-6 max-w-md">
        <TitleH3>{title}</TitleH3>
      </div>
      <p className="pr-6 max-w-md text-zinc-300">{children}</p>
    </div>
  );
};

export default FlexRow;
