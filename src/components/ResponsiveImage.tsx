"use client";

import Image from "next/image";
import { styled } from "@mui/system";

const StyledImage = styled(Image)(({ theme }) => ({
  marginLeft: "0",
  [theme.breakpoints.up("sm")]: {
    marginLeft: "auto",
  },
}));

function ResponsiveImage({
  imageSrc,
  altText,
  width,
  height,
  configStyles,
}: {
  imageSrc: string;
  altText: string;
  width: number;
  height: number;
  configStyles: any;
}) {
  return (
    <StyledImage
      src={imageSrc}
      alt={altText}
      width={width}
      height={height}
      style={configStyles}
    />
  );
}

export default ResponsiveImage;
