"use client";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import colors from "@/styles/colors";
import DecorativeImage from "./DecorativeImage";
import ResponsiveImage from "./ResponsiveImage";

function Hero() {
	const theme = useTheme();
	return (
		<Box
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
			<Box
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
					marginBottom: "40px",
				}}
			>
				<Typography
					textAlign={"center"}
					sx={{
						marginTop: "96px",
						fontSize: "12px",
						letterSpacing: "0.5em",
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
			</Box>
			<ResponsiveImage
				imageSrc={"/images/hero.jpeg"}
				altText='ara-y-lalo-1'
				width={360}
				height={480}
				configStyles={{
					borderTopLeftRadius: "80px",
					borderBottomRightRadius: "80px",
				}}
			/>
			<DecorativeImage
				imageSrc={"/images/hero_decoration_left_2.png"}
				altText='decoracion izquierda'
				width={360}
				height={480}
				configStyles={{
					position: "absolute",
					bottom: "-40px",
					right: "32px",
					[theme.breakpoints.up("sm")]: {
						top: "288px",
						right: "96px",
					},
				}}
			/>
			<DecorativeImage
				imageSrc={"/images/hero_decoration_right.png"}
				altText='decoracion derecha'
				width={360}
				height={480}
				configStyles={{
					position: "absolute",
					top: "176px",
					right: "-32px",
					[theme.breakpoints.up("sm")]: {
						right: "-78px",
						top: "-176px",
					},
				}}
			/>
		</Box>
	);
}

export default Hero;
