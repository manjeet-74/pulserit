"use client";
import React from "react";

const shapes = {
    round: "rounded-[144px]",
} as const;

const variants = {
    outline: {
        white_A700: "border-white-a700 border border-solid text-white-a700",
    },
    fill: {
        white_A700: "bg-white-a700 text-blue_gray-400",
    },
} as const;

const sizes = {
    sm: "h-[66px] px-[34px] text-[18px]",
    md: "h-[58px] px-[30px] text-[18px]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
    Partial<{
        label: string;
        prefix: React.ReactNode;
        suffix: React.ReactNode;
        shape: keyof typeof shapes;
        variant: keyof typeof variants | null;
        size: keyof typeof sizes;
        color: keyof (typeof variants)[keyof typeof variants];
    }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "sm", // Default size fixed to a valid key
            color = "white_A700",
            ...restProps
        },
        ref
    ) => {
        return (
            <label
                className={`flex items-center justify-between cursor-text text-[18px] border border-solid rounded-[14px] ${className} 
        ${shape ? shapes[shape] : ""} 
        ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]
                        ? variants[variant][color as keyof (typeof variants)[typeof variant]]
                        : ""} 
        ${size ? sizes[size] : ""}`}
            >
                {!!label && <span className="mr-2">{label}</span>}
                {!!prefix && <span className="mr-2">{prefix}</span>}
                <input
                    ref={ref}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    className="flex-1 bg-transparent outline-none"
                    {...restProps}
                />
                {!!suffix && <span className="ml-2">{suffix}</span>}
            </label>
        );
    }
);

Input.displayName = "Input"; // Necessary for components created with React.forwardRef

export default Input;
