"use client";

import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import colors from "@src/styles/colors";
import { Box, Link as ExternalLink, Typography } from "@mui/material";
import Link from "next/link";
import ResponsiveNav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import DecorativeImage from "@src/components/DecorativeImage";
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
          <DecorativeImage
            imageSrc={"/images/decoration_2.png"}
            altText="decoracion esquina"
            width={180}
            height={480}
            configStyles={{
              position: "absolute",
              bottom: "306px",
              left: "-42px",
              zIndex: "1",
              [theme.breakpoints.up("md")]: {
                bottom: "348px",
                left: "-48px",
              },
            }}
          />
          <DecorativeImage
            imageSrc={"/images/decoration_1.png"}
            altText="decoracion sub esquina"
            width={180}
            height={480}
            configStyles={{
              position: "absolute",
              bottom: "-18px",
              right: "-20px",
              rotate: "346deg",
              [theme.breakpoints.up("md")]: {
                bottom: 0,
                left: "262px",
              },
            }}
          />
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              marginTop: "20px",
            }}
          >
            <DecorativeImage
              imageSrc={"/images/decoration_1.png"}
              altText="decoracion floral"
              width={360}
              height={480}
              configStyles={{
                position: "absolute",
                top: "80px",
                left: "90px",
                rotate: "270deg",
                width: "96px",
                [theme.breakpoints.up("md")]: {
                  left: "240px",
                },
              }}
            />
            <Typography
              sx={{
                marginBottom: "64px !important",
                color: colors.singleText,
                fontSize: "24px",
              }}
            >
              15 de Junio de 2024
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: colors.singleText,
                  fontSize: "24px",
                }}
              >
                Misa
              </Typography>
              <Typography
                sx={{
                  marginRight: 0,
                  color: colors.singleText,
                  fontSize: "24px",
                }}
              >
                13:00 hrs.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  color: colors.singleText,
                  fontSize: "14px",
                }}
              >
                Iglesia La Compañía, Templo Expiatorio del Espíritu Santo Av.
                Juan de Palafox y 4 Sur 403, Puebla, Centro.
              </Typography>
              <ExternalLink
                href="https://maps.app.goo.gl/1wr1P6YKHvDVDw356"
                target="_blank"
                underline="none"
                sx={{
                  borderRadius: "32px",
                  backgroundColor: colors.secondary,
                  border: `1px solid ${colors.primary}!important`,
                  padding: "16px 32px",
                  color: `${colors.primary}!important`,
                  marginBottom: {
                    xs: "64px",
                    sm: "64px",
                    md: "0px",
                    lg: "0px",
                    xl: "0px",
                  },
                }}
              >
                Ir al Mapa
              </ExternalLink>
            </Box>
          </Box>
        </Section>
        <Parents />
        <Section
          direction="left"
          title="Confirma tu asistencia"
          image="/images/table_confirm.png"
          imageVariant="rounded-bottom-right"
          id="confirmar-asistencia"
        >
          <DecorativeImage
            imageSrc={"/images/decoration_1.png"}
            altText="decoracion sub esquina"
            width={180}
            height={480}
            configStyles={{
              position: "absolute",
              bottom: 0,
              right: "-20px",
              rotate: "346deg",
              [theme.breakpoints.up("md")]: {
                left: "235px",
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              marginBottom: {
                xs: "64px",
                sm: "64px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              width: "100%",
            }}
          >
            <Login error={error} />
          </Box>
        </Section>
        <Section
          direction="right"
          title="Recepción"
          text="Estamos muy contentos de poder festejar y brindar con ustedes."
          image="/images/section_2.jpeg"
          imageVariant="rounded-bottom-left"
          id="recepcion"
        >
          <DecorativeImage
            imageSrc={"/images/decoration_2.png"}
            altText="decoracion esquina"
            width={150}
            height={480}
            configStyles={{
              position: "absolute",
              bottom: "370px",
              right: "-18px",
              zIndex: "1",
              transform: "scaleX(-1)",
              [theme.breakpoints.up("md")]: {
                top: "-34px",
                right: "-41px",
              },
            }}
          />
          <DecorativeImage
            imageSrc={"/images/decoration_3.png"}
            altText="decoracion sub esquina"
            width={180}
            height={480}
            configStyles={{
              position: "absolute",
              bottom: "9px",
              left: "-26px",
              zIndex: "1",
              rotate: "16deg",
              [theme.breakpoints.up("md")]: {
                left: "unset",
                right: "262px",
                rotate: "35deg",
              },
            }}
          />
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              marginTop: "20px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <Typography
                sx={{
                  color: colors.singleText,
                  fontSize: "24px",
                }}
              >
                Recepción
              </Typography>
              <Typography
                sx={{
                  color: colors.singleText,
                  fontSize: "24px",
                }}
              >
                15:30 hrs.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  color: colors.singleText,
                  fontSize: "16px",
                }}
              >
                Salón Azul, C. 16 de septiembre 12901, Guadalupe Hidalgo.
              </Typography>
              <ExternalLink
                href="https://maps.app.goo.gl/qou3fYTPRhDYrd676"
                target="_blank"
                underline="none"
                sx={{
                  borderRadius: "32px",
                  backgroundColor: colors.secondary,
                  border: `1px solid ${colors.primary}!important`,
                  padding: "16px 32px",
                  color: `${colors.primary}!important`,
                  marginBottom: {
                    xs: "64px",
                    sm: "64px",
                    md: "0px",
                    lg: "0px",
                    xl: "0px",
                  },
                }}
              >
                Ir al Mapa
              </ExternalLink>
            </Box>
          </Box>
        </Section>
        <Section
          title="¿Cómo llegar?"
          text="Para llegar de la iglesia al salón en transporte publico, caminar 5 calles con dirección al sur hasta llegar a la 11 oriente y 4 sur y tomar la ruta 4 que diga FUENTES - PASEO BRAVO, tiempo estimado de recorrido 1hr y en autoparticular de 30 a 40 min aproximadamente."
          id="como-llegar"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            width: "100%",
          }}
        >
          <Typography
            textAlign={"left"}
            sx={{
              marginTop: "12px",
              color: colors.primary,
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "36px",
                lg: "36px",
                xl: "36px",
              },
            }}
          >
            Aquí puedes hacernos un regalo
          </Typography>
          <Link
            href={"/gifts"}
            style={{
              borderRadius: "32px",
              backgroundColor: colors.secondary,
              border: `1px solid ${colors.primary}!important`,
              padding: "16px 32px",
              color: `${colors.primary}!important`,
              marginBottom: "64px",
              marginTop: "24px",
            }}
          >
            Ir a regalos
          </Link>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
