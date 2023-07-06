import * as React from "react";
import { ButtonProps } from "./type";
import { Button, ButtonSecondary as StyledButtonSecondary } from "./styled";

export const ButtonPrimary = (props: ButtonProps) => {
  return <Button>{props.children}</Button>;
};

export const ButtonSecondary = (props: ButtonProps) => {
  return <StyledButtonSecondary>{props.children}</StyledButtonSecondary>;
};
