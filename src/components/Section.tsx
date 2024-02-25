import { ReactNode } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import colors from "@/styles/colors";
import ResponsiveImage from "./ResponsiveImage";

function Section({
	direction,
	image,
	heading,
	title,
	text,
	children,
	imageVariant,
	id,
}: {
	direction?: string;
	image?: string;
	heading?: string;
	title: string;
	text?: string;
	children?: ReactNode | ReactNode[];
	imageVariant?: string;
	id: string;
}) {
	const theme = useTheme();
	const sectionDirectionStyles = {
		position: "relative",
		display: "flex",
		marginBottom: "160px",
		flexDirection: {
			xs: "column",
			sm: "column",
			md: direction === "right" ? "row" : "row-reverse",
			lg: direction === "right" ? "row" : "row-reverse",
			xl: direction === "right" ? "row" : "row-reverse",
		},
		alignItems: "center",
		justifyContent: {
			xs: "center",
			sm: "center",
			md: "space-between",
			lg: "space-between",
			xl: "space-between",
		},
		width: "100%",
		height: "100%",
	};

	const imageRoundedBorders = {
		marginLeft: 0,
		borderBottomRightRadius:
			imageVariant === "rounded-bottom-right" || !imageVariant
				? theme.borderRadius.xl
				: 0,
		borderBottomLeftRadius:
			imageVariant === "rounded-bottom-left" ? theme.borderRadius.xl : 0,
		borderTopRightRadius:
			imageVariant === "rounded-top-right" ? theme.borderRadius.xl : 0,
		borderTopLeftRadius:
			imageVariant === "rounded-top-left" || !imageVariant
				? theme.borderRadius.xl
				: 0,
	};

	return (
		<Box sx={sectionDirectionStyles} id={id}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "start",
					width: {
						xs: "100%",
						sm: "100%",
						md: image ? "50%" : "100%",
						lg: image ? "50%" : "100%",
						xl: image ? "50%" : "100%",
					},
				}}
			>
				{heading ? (
					<Typography
						textAlign={"center"}
						sx={{
							marginTop: "96px",
							letterSpacing: "0.1em",
							color: colors.singleText,
						}}
					>
						{heading}
					</Typography>
				) : (
					<></>
				)}
				<Typography
					textAlign='center'
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
						width: "100%",
					}}
				>
					{title}
				</Typography>
				{text ? (
					<Typography
						textAlign='center'
						sx={{
							width: "100%",
							marginTop: "8px",
							color: colors.singleText,
							fontSize: "16px",
						}}
					>
						{text}
					</Typography>
				) : (
					<></>
				)}
				{children}
			</Box>
			{image ? (
				<ResponsiveImage
					imageSrc={image}
					altText='ara-y-lalo-1'
					width={360}
					height={480}
					configStyles={imageRoundedBorders}
				/>
			) : (
				<></>
			)}
		</Box>
	);
}

export default Section;
