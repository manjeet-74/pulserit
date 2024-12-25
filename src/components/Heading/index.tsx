import React from 'react'

export type HeadingProps = Partial<{
    className?: string,
    as: any;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",

    as,
    ...restProps
}) => {
    const Component = as || "h6";

    return (
        <Component classNam{`${className}`} {...restProps}>
            {children}
        </Component>
    )
}

export { Heading };