import Image from "next/image";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import colors from "@/styles/colors";


const parentBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  marginBottom: "20px",
};

const parentTitleStyles = {
  marginBottom: "8px",
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "24px",
    lg: "24px",
    xl: "24px",
  },
  color: colors.primary,
};

const parentNameStyles = {
  marginBottom: "8px",
  fontSize: {
    xs: "18px",
    sm: "18px",
    md: "20px",
    lg: "20px",
    xl: "20px",
  },
  color: colors.singleText,
};

function Parents() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "36px",
        marginBottom: "160px",
        width: "100%",
      }}
    >
      <Typography
        textAlign={"center"}
        sx={{
          marginBottom: "36px",
          color: colors.primary,
          fontWeight: "700",
          fontSize: {
            xs: "24px",
            sm: "24px",
            md: "36px",
            lg: "36px",
            xl: "36px",
          },
        }}
      >
        Con la bendición de Dios y en compañía de nuestros padres y padrinos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          width: "75%",
        }}
      >
        <Box sx={parentBoxStyles}>
          <Typography sx={parentTitleStyles}>Padres de la novia</Typography>
          <Typography sx={parentNameStyles}>
            Sra. Virginia Díaz Solano
          </Typography>
        </Box>
        <Box sx={parentBoxStyles}>
          <Typography sx={parentTitleStyles}>Padres del novio</Typography>
          <Typography sx={parentNameStyles}>
            Sra. Natalia López Álvarez
          </Typography>
          <Typography sx={parentNameStyles}>
            Sr. Ramón Clemente López
          </Typography>
        </Box>
        <Box sx={parentBoxStyles}>
          <Typography sx={parentTitleStyles}>Padrinos</Typography>
          <Typography sx={parentNameStyles}>
            Sra. Marlen Maribel Merino Lozano
          </Typography>
          <Typography sx={parentNameStyles}>
            Sr. Alfonso Merino Flores
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Parents;