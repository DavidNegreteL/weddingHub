"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import colors from "@/styles/colors";

const validationSchema = yup.object({
	attendeesField: yup
		.number()
		.min(1, "Incluyéndote a ti, el mínimo de invitados para confirmar es 1")
		.required("Confirma a los asistentes por favor"),
});

function Confirm({ name, attendees }: { name: string; attendees: number }) {
	const [attendeesValue, setAttendeesValue] = useState<number>(attendees);
	const formik = useFormik({
		initialValues: {
			attendeesField: attendees,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(JSON.stringify(values, null, 2));
		},
	});
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
						fontSize: "16px",
					}}
				>
					{
						"Recuerda que tienes hasta el X de Mayo para confirmar tu asistencia"
					}
				</Typography>
			</Box>
			<form onSubmit={formik.handleSubmit}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "16px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "16px	",
						}}
					>
						<Typography
							textAlign='center'
							sx={{
								width: "100%",
								marginTop: "8px",
								color: colors.singleText,
								fontSize: "16px",
							}}
						>
							{
								"Ayúdanos confirmando a los asistentes. Considera que este número te incluye."
							}
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: {
								xs: "column",
								sm: "column",
								md: "row",
								lg: "row",
								xl: "row",
							},
							gap: "16px",
						}}
					>
						<TextField
							name='attendeesField'
							placeholder='Asistentes'
							sx={{
								flexGrow: 1,
								justifyContent: "center",
								backgroundColor: colors.secondary,
								borderBottom: `1px solid ${colors.singleText}!important`,
								padding: "12px 16px!important",
								color: `${colors.primary}!important`,
							}}
							type={"number"}
							value={attendeesValue}
							inputProps={{ min: 1, max: attendees }}
							onChange={(e) => setAttendeesValue(parseInt(e.target.value))}
						/>
						<Button
							variant='outlined'
							type='submit'
							onClick={() => {}}
							sx={{
								flexGrow: 1,
								borderRadius: "32px",
								backgroundColor: colors.secondary,
								border: `1px solid ${colors.primary}!important`,
								padding: "16px 32px!important",
								color: `${colors.primary}!important`,
							}}
						>
							Confirmar
						</Button>
						<Button
							variant='outlined'
							type='submit'
							onClick={() => {}}
							sx={{
								flexGrow: 1,
								borderRadius: "32px",
								backgroundColor: colors.secondary,
								border: `1px solid ${colors.primary}!important`,
								padding: "16px 32px!important",
								color: `${colors.primary}!important`,
							}}
						>
							Cancelar
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	);
}

export default Confirm;
