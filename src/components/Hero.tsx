import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    <Container className="relative p-0 w-full h-full flex flex-col items-center mb-40 md:flex-row">
      <Container className="flex flex-col items-start p-0 w-full mb-9 md:w-1/2">
        <Typography
          textAlign={"center"}
          className="text-text text-xs mt-24 tracking-widest font-montserrat"
        >
          ¡NOS CASAMOS!
        </Typography>
        <Typography
          textAlign={"left"}
          className="text-primary-1 text-4xl mt-3 font-cormorant md:text-6xl"
        >
          EL MEJOR DÍA DE NUESTRAS VIDAS
        </Typography>
        <Typography textAlign={"left"} className="text-text text-s mt-2">
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
