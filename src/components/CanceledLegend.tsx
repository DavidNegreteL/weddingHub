"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import colors from "@/styles/colors";

function CanceledLegend({ name }: { name: string }) {
	return (
		<Box
			sx={{
				position: "relative",
				display: "flex",
				marginBottom: "160px",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "100%",
			}}
			id={"confirmar-asistencia"}
		>
			<Box sx={{ marginBottom: "32px" }}>
				<Typography
					textAlign='center'
					sx={{
						marginTop: "12px",
						color: colors.primary,
						fontWeight: "700",
						fontSize: {
							xs: "36px",
							sm: "36px",
							md: "48px",
							lg: "48px",
							xl: "48px",
						},
						width: "100%",
					}}
				>
					{`Hola, ${name}`}
				</Typography>
				<Typography
					textAlign='center'
					sx={{
						width: "100%",
						marginTop: "8px",
						color: colors.singleText,
						fontSize: "20px",
					}}
				>
					{
						"Lamentamos que no puedas acompañarnos. Si crees que se trata de un error comunícate con Ara o Lalo para resolverlo."
					}
				</Typography>
			</Box>
		</Box>
	);
}

export default CanceledLegend;
