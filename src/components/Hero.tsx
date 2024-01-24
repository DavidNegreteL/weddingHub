import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    <Container className="p-0 w-full h-full flex flex-col mb-40 md:flex-row">
      <Container className="flex flex-col items-start p-0 w-full mb-9 md:w-1/2">
        <Typography
          textAlign={"center"}
          className="text-text text-xs mt-24 tracking-widest font-montserrat"
        >
          NOS CASAMOS
        </Typography>
        <Typography
          textAlign={"left"}
          className="text-primary-1 text-6xl mt-3 font-cormorant"
        >
          EL MEJOR DÍA DE NUESTRAS VIDAS
        </Typography>
        <Typography textAlign={"left"} className="text-text text-s mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad
          blanditiis, consectetur rerum sapiente iure dicta excepturi reiciendis
          possimus commodi amet accusamus quaerat corporis a soluta repudiandae
          atque dolor in?
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

export default Hero;
