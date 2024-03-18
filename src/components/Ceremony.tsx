"use client";

import { Box, Typography, Link as ExternalLink } from "@mui/material";
import DecorativeImage from "./DecorativeImage";
import Section from "./Section";
import colors from '../styles/colors';
import { useTheme } from "@mui/material/styles";

function Ceremony() {
const theme = useTheme();
return (
    <Section
					direction='left'
					title='Ceremonia Religiosa'
					text='Queridos amigos y familiares, les hacemos llegar nuestra invitación de boda. ¡Esperamos que puedan acompañarnos y compartir con nosotros la alegría de este gran día!'
					image='/images/section_1.jpeg'
					imageVariant='rounded-bottom-right'
					id='la-boda'
				>
					<DecorativeImage
						imageSrc={"/images/decoration_2.png"}
						altText='decoracion esquina'
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
						altText='decoracion sub esquina'
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
							altText='decoracion floral'
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
								href='https://maps.app.goo.gl/1wr1P6YKHvDVDw356'
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

export default Ceremony;