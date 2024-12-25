import React from "react";

const shapes = {
  sqaure: "rounded-[0px]",
  round: "rounded-[14px]",
} as const;
const variants = {
  outline: {
    gray_900_01: "boorder-gray-900_01 border border-solid text-black-900",
  },
  fill: {
    blue_gray_400_01: "bg-blue-gray-400_01 text-white-a700",
    gray_900_01: "bg-gray-900_01 text-white-a700",
    light_green_A200: "bg-light_green-A200 text-black-900",
    white_A700: "bg-white-a700",
    gray_100: "bg-gray-100",
    black_900: "bg-black-900",
  },
} as const;
const sizes = {
  xl: "h-[62px] px-[32px] text-[18px]",
  xs: "h-px",
  sm: "h-[30px] px-[1.5px]",
  "2xl": "h-[72px] px-[36px] text-[24px]",
  lg: "h-[52px] px-[5px]",
  md: "h-[36px]",
} as const;
type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    size: keyof typeof sizes;
    variant: keyof typeof variants | null;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  size = "md",
  variant = "fill",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`$className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]
        } ${size && sizes[size]} ${variant &&
        variants[variant]?.[color as keyof (typeof variants)[typeof variant]]
        } `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };