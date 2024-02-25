"use client";

import { Box } from "@mui/material";
import DecorativeImage from "./DecorativeImage";
import Login from "./Login";
import Section from "./Section";
import { useTheme } from "@mui/material/styles";

function Rsvp() {
const theme = useTheme();
return (
    <Section
					direction='left'
					title='Confirma tu asistencia'
					image='/images/table_confirm.png'
					imageVariant='rounded-bottom-right'
					id='confirmar-asistencia'
				>
					<DecorativeImage
						imageSrc={"/images/decoration_1.png"}
						altText='decoracion sub esquina'
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
						<Login />
					</Box>
				</Section>
);
};

 export default Rsvp;