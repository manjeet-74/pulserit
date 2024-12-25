import React from "react";

export type TextProps = Partial<{
  className: string;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component className={`${className}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };