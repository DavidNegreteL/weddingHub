import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

function Section({
  direction,
  image,
  heading,
  title,
  text,
  children,
  imageVariant,
  id,
}: {
  direction?: string;
  image?: string;
  heading?: string;
  title: string;
  text?: string;
  children?: ReactNode | ReactNode[];
  imageVariant?: string;
  id: string;
}) {
  const sectionDirection =
    direction === "right"
      ? "relative p-0 m-0 w-full h-full flex flex-col items-center mb-40 md:flex-row md: justify-between"
      : direction === "left"
      ? "relative p-0 m-0 w-full h-full flex flex-col items-center mb-40 md:flex-row-reverse md:justify-between"
      : "relative p-0 m-0 w-full h-full flex flex-col items-center mb-40 md:flex-row-reverse md:justify-center";
  const roundedImage =
    imageVariant === "rounded-bottom-right"
      ? "rounded-br-lg ml-0 duration-300"
      : imageVariant === "rounded-bottom-left"
      ? "rounded-bl-lg ml-0 duration-300"
      : imageVariant === "rounded-top-left"
      ? "rounded-tl-lg ml-0 duration-300"
      : imageVariant === "rounded-top-right"
      ? "rounded-tr-lg ml-0 duration-300"
      : "rounded-tl-lg rounded-br-lg ml-0 duration-300";
  return (
    <Container className={sectionDirection} id={id}>
      <Container className="flex flex-col justify-center items-start p-0 m-0 w-full mb-9 md:w-1/2">
        {heading ? (
          <Typography
            textAlign={"center"}
            className="text-text text-xs mt-24 tracking-widest font-montserrat"
          >
            {heading}
          </Typography>
        ) : (
          <></>
        )}
        <Typography
          textAlign={"left"}
          className="text-primary-1 text-4xl mt-3 font-cormorant md:text-6xl"
        >
          {title}
        </Typography>
        <Typography textAlign={"left"} className="text-text text-s mt-2">
          {text}
        </Typography>
        {children}
      </Container>
      {image ? (
        <Image
          src={image}
          alt="ara-y-lalo-1"
          width={360}
          height={480}
          className={roundedImage}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}

export default Section;
