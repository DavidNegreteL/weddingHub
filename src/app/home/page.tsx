import Link from "next/link";
import { Box, Link as ExternalLink, Typography } from "@mui/material";
import { getServerAuthSession } from "@auth";
import CountdownTimer from "@/components/Countdown";
import DecorativeImage from "@/components/DecorativeImage";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Login from "@/components/Login";
import ResponsiveNav from "@/components/Nav";
import Parents from "@/components/Parents";
import Section from "@/components/Section";
import colors from "@/styles/colors";
import Ceremony from "@/components/Ceremony";
import Reception from "@/components/Reception";
import Rsvp from "@/components/Rsvp";

export default async function Home() {
	const authSession = await getServerAuthSession();
	console.log(authSession);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#EAD9C9",
					width: "100%",
					height: "100%",
					padding: {
						xs: "40px",
						sm: "40px",
						md: "80px",
						lg: "80px",
						xl: "80px",
					},
				}}
			>
				<ResponsiveNav />
				<Hero />
				<CountdownTimer targetDate='2024-06-15T00:00:00' />
				<Ceremony/>
				<Parents />
				<Rsvp/>
				<Reception/>
				<Section
					title='¿Cómo llegar?'
					text='Para llegar de la iglesia al salón en transporte publico, caminar 5 calles con dirección al sur hasta llegar a la 11 oriente y 4 sur y tomar la ruta 4 que diga FUENTES - PASEO BRAVO, tiempo estimado de recorrido 1hr y en autoparticular de 30 a 40 min aproximadamente.'
					id='como-llegar'
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
