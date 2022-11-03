import React from "react";

export type ButtonProps = {
  label: string;
} & Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "children"
>;

export const Button = ({ label, ...props }: ButtonProps): JSX.Element => {
  return <button {...props}>{label}</button>;
};
