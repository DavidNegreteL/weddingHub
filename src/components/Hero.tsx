import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import colors from "@src/styles/colors";

function Hero() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
        alignItems: "center",
        marginBottom: "160px",
        padding: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          padding: 0,
          width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%",
          },
          marginBottom: theme.spacings.lg,
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{
            marginTop: "96px",
            fontSize: "12px",
            letterSpacing: "0.1em",
            color: colors.singleText,
          }}
        >
          ¡NOS CASAMOS!
        </Typography>
        <Typography
          textAlign={"left"}
          sx={{
            marginTop: "12px",
            color: colors.primary,
            fontWeight: "700",
            fontSize: {
              xs: "36px",
              sm: "36px",
              md: "60px",
              lg: "60px",
              xl: "60px",
            },
          }}
        >
          EL MEJOR DÍA DE NUESTRAS VIDAS
        </Typography>
        <Typography
          textAlign={"left"}
          sx={{
            marginTop: "8px",
            color: colors.singleText,
            fontSize: "16px",
          }}
        >
          Poco a poco iremos revelándonos mutuamente, descubriendo nuestros
          secretos, nuestros pequeños trucos, aprendiendo a complacernos. Y un
          día tú y yo seremos una pareja de amantes perfectos y entonces, en la
          mitad de un abrazo, nos desvaneceremos y aparecerá en la pantalla la
          palabra fin.
        </Typography>
      </Container>
      <Image
        src={"/images/hero.jpeg"}
        alt="ara-y-lalo-1"
        width={360}
        height={480}
        className="rounded-tl-lg rounded-br-lg ml-0 duration-300 md:ml-auto"
      />
      <Image
        src={"/images/hero_decoration_left_2.png"}
        alt="decoracion izquierda"
        width={360}
        height={480}
        className="absolute -bottom-l right-8 md:top-72 right-24"
      />
      <Image
        src={"/images/hero_decoration_right.png"}
        alt="decoracion derecha"
        width={360}
        height={480}
        className="absolute -top-44 -right-8 md:-right-28"
      />
    </Container>
  );
}

export default Hero;
