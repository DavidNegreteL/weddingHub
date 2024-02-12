import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Parents() {
  return (
    <Container className="p-0 m-0 w-full flex flex-col gap-9 items-center mb-40">
      <Typography className="text-primary-1 text-2xl mb-9 font-cormorant md:text-4xl">
        Con la bendición de Dios y en compañía de nuestros padres y padrinos
      </Typography>
      <Box className=" flex w-9/12 flex-col justify-between items-center md:items-start gap-4 md:flex-row">
        <Box className="flex flex-col items-center gap-1 mb-5">
          <Typography className="text-primary-1 text-xl mb-2 font-cormorant md:text-2xl">
            Padres de la novia
          </Typography>
          <Typography className="text-text text-lg mb-2 font-cormorant md:text-xl">
            Sra. Virginia Díaz Solano
          </Typography>
        </Box>
        <Box className="flex flex-col items-center gap-1 mb-5">
          <Typography className="text-primary-1 text-xl mb-2 font-cormorant md:text-2xl">
            Padres del novio
          </Typography>
          <Typography className="text-text text-lg mb-2 font-cormorant md:text-xl">
            Sra. Natalia López Álvarez
          </Typography>
          <Typography className="text-text text-lg mb-2 font-cormorant md:text-xl">
            Sr. Ramón Clemente López
          </Typography>
        </Box>
        <Box className="flex flex-col items-center gap-1 mb-5">
          <Typography className="text-primary-1 text-xl mb-2 font-cormorant md:text-2xl">
            Padrinos
          </Typography>
          <Typography className="text-text text-lg mb-2 font-cormorant md:text-xl">
            Sra. Marlen Maribel Merino Lozano
          </Typography>
          <Typography className="text-text text-lg mb-2 font-cormorant md:text-xl">
            Sr. Alfonso Merino Flores
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Parents;
