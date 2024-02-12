import Image from "next/image";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import PushPinIcon from "@mui/icons-material/PushPin";

function Card({
  src,
  logo,
  link,
  name,
  reserved,
}: {
  src: string;
  logo: string;
  link: string;
  name: string;
  reserved: string;
}) {
  return (
    <Container className="relative flex flex-col items-start px-5 py-6 rounded-sm border-solid border border-primary-1 bg-white">
      {reserved ? (
        <Box className="absolute top-0 left-5 p-2 rounded-b-[12px] flex items-center gap-2 bg-primary-1 w-auto h-[36px]">
          <PushPinIcon />
          <Typography className="text-white text-sm font-cormorant">
            Apartado
          </Typography>
        </Box>
      ) : (
        <></>
      )}
      <Link
        href={link}
        className="absolute top-1.5 right-1.5 flex items-center gap-2 text-text text-sm"
      >
        Ir a
        <Image
          alt="logo"
          src={`/images/${logo}_logo.svg`}
          width={40}
          height={40}
        />
      </Link>
      <Image
        alt="product-image"
        src={src}
        width={152}
        height={92}
        className="mb-2.5 mt-9 self-center w-auto h-[130px] object-cover"
      />
      <Typography className="text-text text-xl mb-2.5 font-cormorant font-medium">
        <Box className="flex">{name}</Box>
      </Typography>
      <Box className="border-solid border-b border-primary-1 mb-6 w-full"></Box>
      <Button
        variant="contained"
        className="rounded-md bg-primary-1 text-white self-center"
      >
        {reserved ? "Liberar" : "Apartar"}
      </Button>
    </Container>
  );
}

export default Card;
