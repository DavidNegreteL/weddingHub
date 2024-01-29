import { Container, Box, Typography, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

function Footer() {
  return (
    <Container className="w-full bg-primary-1 flex flex-col m-0 p-6 gap-2 md:max-w-full">
      <Typography
        textAlign={"center"}
        className="text-white text-4xl mt-3 font-cormorant md:text-6xl"
      >
        ¿Preguntas?
      </Typography>
      <Typography
        textAlign={"center"}
        className="text-white text-xl font-cormorant"
      >
        Llama o envía mensaje
      </Typography>
      <Box className="flex flex-col gap-2 md:flex-row md:justify-center">
        <Box className="flex flex-row items-center justify-center gap-3 w-full">
          <Typography
            textAlign={"center"}
            className="text-white text-lg font-cormorant"
          >
            {"Ara: "}
          </Typography>
          <Link
            href="tel: +52 1 221 106 3672"
            underline="none"
            className="text-white flex flex-row items-center justify-center gap-3"
          >
            {"+52 1 221 106 3672"}
            <CallIcon />
          </Link>
        </Box>
        <Box className="flex flex-row items-center justify-center gap-3 w-full">
          <Typography
            textAlign={"center"}
            className="text-white text-lg font-cormorant"
          >
            {"Lalo: "}
          </Typography>
          <Link
            href="tel: +52 1 221 409 0596"
            underline="none"
            className="text-white flex flex-row items-center justify-center gap-3"
          >
            {"+52 1 221 409 0596"}
            <CallIcon />
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
