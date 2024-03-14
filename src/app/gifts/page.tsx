"use client";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Card from "../../components/Card";

const giftList = [
	{
		guestId: "2387489",
		link_amazon: "#",
		link_walmart: "#",
		image_link:
			"https://m.media-amazon.com/images/I/51jyLFR7V9L._AC_SL1500_.jpg",
		name: "Aspiradora",
	},
	{
		guestId: "",
		link_amazon: "#",
		link_walmart: "#",
		image_link:
			"https://m.media-amazon.com/images/I/71P2piWQ3ML._AC_SL1500_.jpg",
		name: "Waflera",
	},
];

export default function Gifts() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				padding: {
					xs: "40px",
					sm: "40px",
					md: "80px",
					lg: "80px",
					xl: "80px",
				},
				height: "100%",
				width: "100%",
				backgroundColor: "#efe8e0",
			}}
		>
			<Box
				sx={{
					padding: 0,
					display: "grid",
					rowGap: "32px",
					columnGap: {
						xs: "0px",
						sm: "0px",
						md: "32px",
						lg: "32px",
						xl: "32px",
					},
					gridTemplateColumns: {
						xs: "repeat(1, minmax(0, 1fr))",
						sm: "repeat(1, minmax(0, 1fr))",
						md: "repeat(4, minmax(0, 1fr))",
						lg: "repeat(4, minmax(0, 1fr))",
						xl: "repeat(4, minmax(0, 1fr))",
					},
					marginTop: "12px",
					marginBottom: "12px",
				}}
			>
				{giftList.map((gift) => {
					return (
						<Card
							key={`${gift.name}-card`}
							src={gift.image_link}
							logo={gift.link_amazon ? "amazon" : "walmart"}
							link={gift.link_amazon ? gift.link_amazon : gift.link_walmart}
							name={gift.name}
							reserved={gift.guestId}
						/>
					);
				})}
			</Box>

			<Typography
				sx={{ mt: 4, mb: 2, color: "#000000" }}
				variant='h6'
				component='div'
			>
				Recuerda
			</Typography>
			<List sx={{ color: "#000000" }}>
				<ListItem>
					<ListItemText primary='Si Apartas un regalo no significa que la compra se ha realizado.' />
				</ListItem>
				<ListItem>
					<ListItemText primary='Para realizar la compra debes entrar al enlace de la tienda que ubicarás en la parte superior de cada artículo.' />
				</ListItem>
				<ListItem>
					<ListItemText primary='La compra se realizar desde el sitio del vendedor o distribuidor, esta página sólo funciona como una galería de posibles regalos.' />
				</ListItem>
			</List>
		</Box>
	);
}
