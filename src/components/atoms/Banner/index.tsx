"use client";

import classes from "./Banner.module.css";
import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  maxHeight?: string;
}

export default function Banner({ src, alt, maxHeight }: IProps) {
  return (
    <Image
      className={classes.banner}
      src={src}
      alt={alt}
      style={{maxHeight: maxHeight}}
      width={1280}
      height={720}
    />
  );
}
