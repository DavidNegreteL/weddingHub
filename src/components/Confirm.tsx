"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { updateGuest } from "@/app/actions";
import colors from "@/styles/colors";

function Confirm({
	id,
	name,
	attendees,
}: {
	id: string;
	name: string;
	attendees: number;
}) {
	const [attendeesValue, setAttendeesValue] = useState<number>(attendees);
	const [error, setError] = useState<string>("");

	const handleSubmit = async (status: number) => {
		if (status === 2) {
			if (attendeesValue > attendees) {
				setError(
					`Sólo cuentas con ${attendees} boletos. Si crees que se trata de un error comunícate con Ara o Lalo`
				);
			} else if (attendeesValue < 1) {
				setError(
					"La cantidad mínima de boletos para confirmar tu asistencia es 1"
				);
			} else {
				await updateGuest({ id, attendees: attendeesValue, status });
			}
		} else if (status === 3) {
			await updateGuest({ id, attendees: 0, status });
		}
	};

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
						"Recuerda que tienes hasta el 4 de Mayo para confirmar tu asistencia"
					}
				</Typography>
			</Box>
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
				{error ? (
					<Box
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "8px",
							padding: "6px 10px",
							backgroundColor: colors.error,
						}}
					>
						<Typography
							textAlign='center'
							sx={{
								width: "100%",
								marginTop: "8px",
								color: colors.white,
								fontSize: "14px",
							}}
						>
							{error}
						</Typography>
					</Box>
				) : null}
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
						onClick={() => handleSubmit(2)}
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
						onClick={() => handleSubmit(3)}
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
		</Box>
	);
}

export default Confirm;
