import React from "react";
import { BigLogo, ButtonAlt } from "../components/atoms";
import {
  ImageMore,
  InfoButtons,
  Upload,
  SaveNext,
  ButtonList,
} from "../components/molecules";

export function Home() {
  const btns = [
    {
      key: 1,
      text: "home",
      type: "primary",
      color: "first",
    },
    {
      key: 2,
      text: "about",
      type: "primary",
      color: "second",
    },
    {
      key: 3,
      text: "home",
      type: "secondary",
    },
  ];

  return (
    <>
      <ButtonAlt text="hola" textcolor="light" />
      {/* <ButtonList buttons={btns} /> */}
      {/* <SaveNext colorText="light" /> */}
      {/* <Upload buttonText="Upload Logo" photoSize="800px x 400px" /> */}
      <BigLogo />
    </>
  );
}
