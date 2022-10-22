import * as React from "react";
import { css } from "../../styled-system/css";
import { TitleH3 } from "./Title";

type FlexRowTypes = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const FlexRow = ({ title, children }: FlexRowTypes) => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        sm: { flexDirection: "row" },
        marginTop: "4",
        marginBottom: "4",
      })}
    >
      <div className={css({ paddingRight: "6", maxWidth: "md" })}>
        <TitleH3>{title}</TitleH3>
      </div>
      <p
        className={css({
          paddingRight: "6",
          maxWidth: "md",
          color: "zinc.300",
        })}
      >
        {children}
      </p>
    </div>
  );
};

export default FlexRow;
