import React, { forwardRef } from "react";
import "./Button.css";

export type ButtonProps = {
  label: string;
} & Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "children"
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { label, ...props },
  ref
) {
  return (
    <button {...props} ref={ref}>
      {label}
    </button>
  );
});
