// "use client";
// import React from 'react'

// const shapes = {
//     round: "rounded-[144px]"
// } as const;

// const variants = {
//     outline: {
//         white_A700: "border-white-a700 border border-solid text-white-a700"
//     },
//     fill: {
//         white_A700: "bg-white-a700 text-blue_gray-400",
//     },
// } as const;

// const sizes = {
//     sm: "h-[66px] px-[34px] text-[18px]",
//     md: "h-[58px] px-[30px] text-[18px]",
    
// }

// type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'prefix' | 'size'> & 
// Partial<{
//     label: string,
//     prefix: React.ReactNode,
//     suffix: React.ReactNode,
//     shape: keyof typeof shapes,
//     variant: keyof typeof variants | null,
//     size: keyof typeof sizes,
//     color: string
// }>;

// const Input =  React.forwardRef<HTMLInputElement, InputProps>(
//     (
//         {
//             className = "",
//             name = "",
//             placeholder = "",
//             type = "text",
//             label = "",
//             prefix,
//             suffix,
//             onchange,
//             shape,
//             variant = "fill",
//             size = "xs",
//             color = "white_A700",
//             ...restProps
//         },
//         ref,
//     ) =>{
//         return (
//             <label
//             className={`flex ${className} items-center justify-center sm:px-5 cursor-text text-[18px] border border-solid rounded-[14px] 
//   ${shape ? shapes[shape] : ""} 
//   ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]] 
//     ? variants[variant][color as keyof (typeof variants)[typeof variant]] 
//     : ""} 
//   ${size ? sizes[size] : ""}`}

//         )
//     }
// )