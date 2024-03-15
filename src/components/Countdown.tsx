"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Countdown from "react-countdown";
import colors from "@/styles/colors";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const renderer = ({
		days,
		hours,
		minutes,
		seconds,
		completed,
	}: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		completed: boolean;
	}) => {
		if (completed) {
			return (
				<Typography
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
					{"¡Es hoy!"}
				</Typography>
			);
		} else {
			return (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "20px",
						padding: "16px",
						marginBottom: "160px",
					}}
				>
					<Typography
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
						Faltan
					</Typography>
					<Box
						sx={{
							display: "flex",
							gap: {
								xs: "28px",
								sm: "28px",
								md: "48px",
								lg: "48px",
								xl: "48px",
							},
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "8px",
							}}
						>
							<Typography
								sx={{
									marginTop: "12px",
									color: colors.primary,
									fontWeight: "700",
									fontSize: {
										xs: "24px",
										sm: "24px",
										md: "36px",
										lg: "36px",
										xl: "36px",
									},
								}}
							>
								{days}
							</Typography>
							<Typography
								sx={{
									marginTop: "12px",
									color: colors.primary,
									fontWeight: "700",
									fontSize: {
										xs: "20px",
										sm: "20px",
										md: "24px",
										lg: "24px",
										xl: "24px",
									},
								}}
							>
								Días
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "8px",
							}}
						>
							<Typography
								sx={{
									marginTop: "12px",
									color: colors.primary,
									fontWeight: "700",
									fontSize: {
										xs: "24px",
										sm: "24px",
										md: "36px",
										lg: "36px",
										xl: "36px",
									},
								}}
							>
								{hours}
							</Typography>
							<Typography
								sx={{
									marginTop: "12px",
									color: colors.primary,
									fontWeight: "700",
									fontSize: {
										xs: "20px",
										sm: "20px",
										md: "24px",
										lg: "24px",
										xl: "24px",
									},
								}}
							>
								Horas
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "8px",
							}}
						>
							<Typography
								sx={{
									marginTop: "12px",
									color: colors.primary,
									fontWeight: "700",
									fontSize: {
										xs: "24px",
										sm: "24px",
										md: "36px",
										lg: "36px",
										xl: "36px",
									},
								}}
							>
								{minutes}
							</Typography>
							<Typography
								sx={{
									marginTop: "12px",
									color: colors.primary,
									fontWeight: "700",
									fontSize: {
										xs: "20px",
										sm: "20px",
										md: "24px",
										lg: "24px",
										xl: "24px",
									},
								}}
							>
								Minutos
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "8px",
							}}
						>
							<Typography
								sx={{
									marginTop: "12px",
									color: colors.primary,
									fontWeight: "700",
									fontSize: {
										xs: "24px",
										sm: "24px",
										md: "36px",
										lg: "36px",
										xl: "36px",
									},
								}}
							>
								{seconds}
							</Typography>
							<Typography
								sx={{
									marginTop: "12px",
									color: colors.primary,
									fontWeight: "700",
									fontSize: {
										xs: "20px",
										sm: "20px",
										md: "24px",
										lg: "24px",
										xl: "24px",
									},
								}}
							>
								Segundos
							</Typography>
						</Box>
					</Box>
				</Box>
			);
		}
	};

	return isClient ? <Countdown date={targetDate} renderer={renderer} /> : null;
};

export default CountdownTimer;