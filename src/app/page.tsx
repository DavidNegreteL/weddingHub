import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { Session } from "next-auth";
import { getServerAuthSession } from "@auth";
import { PrismaClient } from "@prisma/client";
import AssistanceLegend from "@/components/AssitanceLegend";
import CanceledLegend from "@/components/CanceledLegend";
import Ceremony from "@/components/Ceremony";
import Confirm from "@/components/Confirm";
import CountdownTimer from "@/components/Countdown";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ResponsiveNav from "@/components/Nav";
import Parents from "@/components/Parents";
import Reception from "@/components/Reception";
import Rsvp from "@/components/Rsvp";
import Section from "@/components/Section";
import colors from "@/styles/colors";

const prisma = new PrismaClient();

async function getUser(id: string) {
	try {
		return await prisma.guest.findUnique({ where: { id } });
	} catch (error) {
		console.error("Failed to fetch guest", error);
		throw new Error("Failed to fetch guest");
	}
}
export default async function Home() {
	let userData: {
		id: string;
		name: string;
		username: string | null;
		password: string | null;
		status: number;
		max_attendees: number;
		attendees: number;
	} | null = null;
	const authSession = await getServerAuthSession();
	if (authSession) {
		userData = await getUser(authSession.user.id);
	}
	const guestStatus = () => {
		if (userData) {
			if (userData.status === 1) {
				return (
					<Confirm id={userData.id} name={userData.name} attendees={userData.max_attendees} />
				);
			}
			if (userData.status === 2) {
				return <AssistanceLegend name={userData.name} />;
			}
			if (userData.status === 3) {
				return <CanceledLegend name={userData.name} />;
			}
		}
	};
	console.log("userData", userData);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: colors.secondary,
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
				<Ceremony />
				<Parents />
				<>{authSession ? guestStatus() : <Rsvp />}</>
				<Reception />
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
