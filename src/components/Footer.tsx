import { Container, Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Container className="w-full bg-primary-1 flex flex-col m-0 p-6 gap-2 md:max-w-full">
      <Typography
        textAlign={"center"}
        className="text-white text-6xl mt-3 font-cormorant"
      >
        ¿Preguntas?
      </Typography>
      <Typography
        textAlign={"center"}
        className="text-white text-2xl font-cormorant"
      >
        Llama o envía mensaje
      </Typography>
      <Box className="flex flex-col gap-3 md:flex-row md:justify-center">
        <Typography
          textAlign={"center"}
          className="text-white text-xl font-cormorant"
        >
          {"Ara: "}
          <Link
            href="tel: +52 1 221 106 3672"
            underline="none"
            className="text-white"
          >
            +52 1 221 106 3672
          </Link>
        </Typography>
        <Typography
          textAlign={"center"}
          className="text-white text-xl font-cormorant"
        >
          {"Lalo: "}
          <Link
            href="tel: +52 1 221 409 0596"
            underline="none"
            className="text-white"
          >
            +52 1 221 409 0596
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
