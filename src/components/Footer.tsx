import { Box, Link, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import colors from "@/styles/colors";

function Footer() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "8px",
				padding: "24px",
				width: "100%",
				backgroundColor: colors.primary,
			}}
		>
			<Typography
				textAlign={"center"}
				sx={{
					color: colors.white,
					fontSize: {
						xs: "30px",
						sm: "30px",
						md: "36px",
						lg: "36px",
						xl: "36px",
					},
				}}
			>
				¿Preguntas?
			</Typography>
			<Typography
				textAlign={"center"}
				sx={{
					color: colors.white,
					fontSize: "20px",
				}}
			>
				Llama o envía mensaje
			</Typography>
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
					gap: "8px",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: "12px",
						width: {
							xs: "100%",
							sm: "100%",
							md: "50%",
							lg: "50%",
							xl: "50%",
						},
					}}
				>
					<Typography
						textAlign={"center"}
						sx={{
							color: colors.white,
							fontSize: "18px",
						}}
					>
						{"Ara: "}
					</Typography>
					<Link
						href='tel: +52 1 221 106 3672'
						underline='none'
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							gap: "12px",
							color: colors.white,
							fontSize: "18px",
						}}
					>
						{"+52 1 221 106 3672"}
						<CallIcon />
					</Link>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: "12px",
						width: {
							xs: "100%",
							sm: "100%",
							md: "50%",
							lg: "50%",
							xl: "50%",
						},
					}}
				>
					<Typography
						textAlign={"center"}
						sx={{
							color: colors.white,
							fontSize: "18px",
						}}
					>
						{"Lalo: "}
					</Typography>
					<Link
						href='tel: +52 1 221 409 0596'
						underline='none'
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							gap: "12px",
							color: colors.white,
							fontSize: "18px",
						}}
					>
						{"+52 1 221 409 0596"}
						<CallIcon />
					</Link>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;
