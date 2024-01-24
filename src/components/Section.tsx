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
}: {
  direction: string;
  image: string;
  heading: string;
  title: string;
  text: string;
  children: ReactNode | ReactNode[];
}) {
  return (
    <Container className="p-0 w-full h-full flex flex-col md:flex-row">
      <Container className="flex flex-col items-start p-0 w-full mb-9 md:w-1/2">
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
          className="text-primary-1 text-6xl mt-3 font-cormorant"
        >
          {title}
        </Typography>
        <Typography textAlign={"left"} className="text-text text-s mt-2">
          {text}
        </Typography>
      </Container>
      <Image
        src={"/images/hero.jpeg"}
        alt="ara-y-lalo-1"
        width={360}
        height={480}
        className="rounded-tl-lg rounded-br-lg ml-auto grayscale hover:grayscale-0 duration-300"
      />
    </Container>
  );
}

export default Section;
