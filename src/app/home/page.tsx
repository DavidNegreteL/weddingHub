"use client";

import { useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Link as ExternalLink,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ResponsiveNav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Image from "next/image";
import CountdownTimer from "@/components/Countdown";
import Parents from "@/components/Parents";
import Login from "@/components/Login";

export default function Home() {
  const [error, setError] = useState<string>("");
  const handleLogin = async (values: { user: string; password: string }) => {
    console.log("Login data:", values);
  };
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.secondary.main,
          width: "100%",
          height: "100%",
          padding: {
            xs: theme.spacings.lg,
            sm: theme.spacings.lg,
            md: theme.spacings.xl,
            lg: theme.spacings.xl,
            xl: theme.spacings.xl,
          },
        }}
      >
        <ResponsiveNav />
        <Hero />
        <CountdownTimer targetDate="2024-06-15T00:00:00" />
        <Section
          direction="left"
          title="Ceremonia Religiosa"
          text="Queridos amigos y familiares, les hacemos llegar nuestra invitación de boda. ¡Esperamos que puedan acompañarnos y compartir con nosotros la alegría de este gran día!"
          image="/images/section_1.jpeg"
          imageVariant="rounded-bottom-right"
          id="la-boda"
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
          <Container className="relative flex flex-col items-center gap-8 p-0 mt-5">
            <Image
              src={"/images/decoration_1.png"}
              alt="decoracion floral"
              width={360}
              height={480}
              className="absolute -rotate-90 w-24 top-20 left-20 md:top-20 md:left-60"
            />
            <Typography className="text-text text-2xl font-cormorant mb-16">
              15 de Junio de 2024
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
              <ExternalLink
                href="https://maps.app.goo.gl/1wr1P6YKHvDVDw356"
                target="_blank"
                underline="none"
                className="rounded-md bg-primary-2 border border-primary-1 py-4 px-8 text-primary-1 mb-16 md:mb-0"
              >
                Ir al Mapa
              </ExternalLink>
            </Container>
          </Container>
        </Section>
        <Parents />
        <Section
          direction="left"
          title="Confirma tu asistencia"
          image="/images/table_confirm.png"
          imageVariant="rounded-bottom-right"
          id="confirmar-asistencia"
        >
          <Image
            src={"/images/decoration_1.png"}
            alt="decoracion sub esquina"
            width={180}
            height={480}
            className="absolute bottom-[9px] rotate-[35px] right-[-6px] md:bottom-[9px] md:left-[262px]"
          />
          <Login error={error} />
        </Section>
        <Section
          direction="right"
          title="Recepción"
          text="Estamos muy contentos de poder festejar y brindar con ustedes."
          image="/images/section_2.jpeg"
          imageVariant="rounded-bottom-left"
          id="recepcion"
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
          <Container className="relative flex flex-col items-center gap-8 p-0 mt-5">
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
              <ExternalLink
                href="https://maps.app.goo.gl/qou3fYTPRhDYrd676"
                target="_blank"
                underline="none"
                className="rounded-md bg-primary-2 border border-primary-1 py-4 px-8 text-primary-1 mb-16 md:mb-0"
              >
                Ir al Mapa
              </ExternalLink>
            </Container>
          </Container>
        </Section>
        <Section
          title="¿Cómo llegar?"
          text="Para llegar de la iglesia al salón en transporte publico, caminar 5 calles con dirección al sur hasta llegar a la 11 oriente y 4 sur y tomar la ruta 4 que diga FUENTES - PASEO BRAVO, tiempo estimado de recorrido 1hr y en autoparticular de 30 a 40 min aproximadamente."
          id="como-llegar"
        />
        <Box className="w-full flex flex-col items-center justify-center mt-5">
          <Typography
            textAlign={"left"}
            className="text-primary-1 text-3xl mt-3 font-cormorant md:text-4xl"
          >
            Aquí puedes hacernos un regalo
          </Typography>
          <Link
            href={"/gifts"}
            className="mt-4 p-3 rounded-md bg-primary-1 text-white self-center"
          >
            Ir a regalos
          </Link>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
