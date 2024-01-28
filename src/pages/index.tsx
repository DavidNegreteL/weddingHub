import { Inter } from "next/font/google";
import { Box, Container, Link, Typography } from "@mui/material";
import ResponsiveNav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Image from "next/image";
import CountdownTimer from "@/components/Countdown";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Container className="flex h-full flex-col w-full max-w-full bg-secondary-1 p-l md:p-xl">
        <ResponsiveNav />
        <Hero />
        <CountdownTimer targetDate="2024-06-15T00:00:00" />
        <Section
          direction="left"
          title="Ceremonia Religiosa"
          text="Queridos amigos y familiares, les hacemos llegar nuestra invitación de boda. ¡Esperamos que puedan acompañarnos y compartir con nosotros la alegría de este gran día!"
          image="/images/section_1.jpeg"
          imageVariant="rounded-bottom-right"
        >
          <Image
            src={"/images/decoration_2.png"}
            alt="decoracion esquina"
            width={180}
            height={480}
            className="absolute bottom-[306px] left-[-42px] z-[1] md:bottom-[366px] md:left-[-52px]"
          />
          <Image
            src={"/images/decoration_1.png"}
            alt="decoracion sub esquina"
            width={180}
            height={480}
            className="absolute bottom-[9px] rotate-[35px] right-[-6px] md:bottom-[9px] md:left-[262px]"
          />
          <Container className="relative flex flex-col items-center gap-8 p-0">
            <Image
              src={"/images/decoration_1.png"}
              alt="decoracion floral"
              width={360}
              height={480}
              className="absolute -rotate-90 w-24 top-20 left-20 md:top-20 md:left-60"
            />
            <Typography className="text-text text-2xl font-cormorant mb-16">
              15 de Junio
            </Typography>
            <Container className="flex justify-around items-center">
              <Typography className="text-text text-2xl font-cormorant">
                Misa
              </Typography>
              <Typography className="text-text mr-0 text-2xl font-cormorant">
                13:00 hrs.
              </Typography>
            </Container>
            <Container className="flex flex-col gap-5 justify-center items-center p-0">
              <Typography className="text-text text-s">
                Iglesia La Compañía, Templo Expiatorio del Espíritu Santo Av.
                Juan de Palafox y 4 Sur 403, Puebla, Centro.
              </Typography>
              <Link
                href="https://maps.app.goo.gl/1wr1P6YKHvDVDw356"
                target="_blank"
                underline="none"
                className="rounded-md bg-primary-2 border border-primary-1 py-4 px-8 text-primary-1 mb-16 md:mb-0"
              >
                Ir al Mapa
              </Link>
            </Container>
          </Container>
        </Section>
        <Section
          direction="right"
          title="Recepción"
          text="Queridos amigos y familiares, les hacemos llegar nuestra invitación de boda. ¡Esperamos que puedan acompañarnos y compartir con nosotros la alegría de este gran día!"
          image="/images/section_2.jpeg"
          imageVariant="rounded-bottom-left"
        >
          <Image
            src={"/images/decoration_2.png"}
            alt="decoracion esquina"
            width={150}
            height={480}
            className="absolute bottom-[329px] right-[-37px] z-[1] scale-x-[-1] md:top-[-37px] md:right-[-45px]"
          />
          <Image
            src={"/images/decoration_3.png"}
            alt="decoracion sub esquina"
            width={180}
            height={480}
            className="absolute bottom-[9px] rotate-[35px] scale-x-[-1] md:bottom-[9px] md:right-[262px]"
          />
          <Container className="relative flex flex-col items-center gap-8 p-0">
            <Container className="flex justify-center gap-4 items-center p-0 mt-3">
              <Typography className="text-text text-2xl font-cormorant">
                Recepción
              </Typography>
              <Typography className="text-text mr-0 text-2xl font-cormorant md:mr-20">
                15:30 hrs.
              </Typography>
            </Container>
            <Container className="flex flex-col gap-5 justify-center items-center p-0">
              <Typography className="text-text text-s">
                Salón Azul, C. 16 de septiembre 12901, Guadalupe Hidalgo.
              </Typography>
              <Link
                href="https://maps.app.goo.gl/qou3fYTPRhDYrd676"
                target="_blank"
                underline="none"
                className="rounded-md bg-primary-2 border border-primary-1 py-4 px-8 text-primary-1 mb-16 md:mb-0"
              >
                Ir al Mapa
              </Link>
            </Container>
          </Container>
        </Section>
        <Section
          title="¿Cómo llegar?"
          text="Para llegar de la iglesia al salón en transporte publico, caminar 5 calles con dirección al sur hasta llegar a la 11 oriente y 4 sur y tomar la ruta 4 que diga FUENTES - PASEO BRAVO, tiempo estimado de recorrido 1hr  y en particular de 30 a 40 min aproximadamente."
        ></Section>
      </Container>
      <Footer />
    </>
  );
}
