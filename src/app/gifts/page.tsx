import { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { getServerAuthSession } from "@auth";
import prisma from "@/lib/prisma";
import Card from "../../components/Card";

async function getUser(id: string) {
	try {
		return await prisma.guest.findUnique({ where: { id } });
	} catch (error) {
		console.error("Failed to fetch guest", error);
		throw new Error("Failed to fetch guest");
	}
}

export default async function Gifts() {
	const giftList = await prisma.gift.findMany({
		orderBy: [{ guestId: "asc" }, { name: "asc" }],
	});
	let userData: {
		id: string;
		name: string;
		username: string | null;
		password: string | null;
		status: number;
		max_attendees: number;
		attendees: number;
	} | null = null;
	const authSession = await getServerAuthSession();
	if (authSession) {
		userData = await getUser(authSession.user.id);
	}

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
				backgroundColor: "#EAD9C9",
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
							key={`${gift.id}-card`}
							src={gift.image}
							logo={gift.url_amazon ? "amazon" : "walmart"}
							link={
								gift.url_amazon
									? gift.url_amazon
									: (gift.url_marketplace as string)
							}
							name={gift.name}
							reserved={gift.guestId}
							giftId={gift.id}
							guestId={userData?.id}
						/>
					);
				})}
			</Box>

			<Typography sx={{ mt: 4, mb: 2, color: "#000000" }} variant='h6'>
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
