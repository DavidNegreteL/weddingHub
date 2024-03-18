"use client";

import { Box, Typography, Link as ExternalLink } from "@mui/material";
import DecorativeImage from "./DecorativeImage";
import Section from "./Section";
import colors from '../styles/colors';
import { useTheme } from "@mui/material/styles";

function Reception() {
    const theme = useTheme();
return (
    <Section
					direction='right'
					title='Recepción'
					text='Estamos muy contentos de poder festejar y brindar con ustedes.'
					image='/images/section_2.jpeg'
					imageVariant='rounded-bottom-left'
					id='recepcion'
				>
					<DecorativeImage
						imageSrc={"/images/decoration_2.png"}
						altText='decoracion esquina'
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
						altText='decoracion sub esquina'
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
								href='https://maps.app.goo.gl/qou3fYTPRhDYrd676'
								target='_blank'
								underline='none'
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
);
};

export default Reception;