import Image from "next/image";
import { styled } from "@mui/system";

function DecorativeImage({
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
  const StyledDecorativeImage = styled(Image)(({ theme }) => configStyles);
  return (
    <StyledDecorativeImage
      src={imageSrc}
      alt={altText}
      width={width}
      height={height}
    />
  );
}

export default DecorativeImage;
