"use client";
import React from 'react'
import Image from 'next/image'

const BASE_URL = process.env.BASE_PATH || "/images/";

type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> &
    Partial<{
        className: string;
        src: string;
        alt: string;
        isStatic: boolean;
        width: number;
        height: number;
    }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
    className,
    src = "deaultNoData.png",
    alt = "testImg",
    isStatic = false,
    width,
    height,
    ...props }) => {
    const [imgSrc, setImgSrc] = React.useState(src);

    React.useEffect(() => {
        setImgSrc(src);
    }, [src]);
    return (
        <Image
            src={isStatic ? imgSrc : BASE_URL + imgSrc}
            className={className}
            alt={alt}
            width={width}
            height={height}
            {...props}
            onError={() => {
                setImgSrc(isStatic ? BASE_URL + "defaultNoData.png" : "defaultNoData.png");
            }}
        />
    )
}