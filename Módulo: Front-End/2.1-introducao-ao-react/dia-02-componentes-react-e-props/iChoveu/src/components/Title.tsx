type TitleProps = {
  text: string;
  fabianoescotto: string;
};

import * as React from "react";
import "./Title.css";

function Title(props: TitleProps) {
  const { text, fabianoescotto } = props;

  return (
    <>
      <h1>{text}</h1>
      <h1>{fabianoescotto}</h1>
    </>
  );
}

export default Title;
