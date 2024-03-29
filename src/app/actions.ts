"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import prisma from "@/lib/prisma";


const apiUrl = process.env.WEB_URL ?? "http://localhost:3000";

export const updateGift = async (giftData: Pick<Gift, "id" | "guestId">) => {
	try {
		const { guestId, id } = giftData;

		if (guestId !== null) {
			await prisma.gift.updateMany({
				where: {
					guestId: {
						equals: guestId,
					},
				},
				data: {
					guestId: null,
				},
			});
		}

		if (id) {
			const gift = await prisma.gift.update({
				where: { id },
				data: { guestId },
			});
		}
		revalidatePath("/gifts");
	} catch (error: any) {
		console.error(error);
	}
};

export const updateGuest = async (
	guestData: Pick<Guest, "id" | "attendees" | "status">
) => {
	try {
		const { id, status, attendees } = guestData;
		if (id) {
			const guest = await prisma.guest.update({
				where: { id },
				data: { status, attendees },
			});
			revalidatePath("/");
		}
	} catch (error: any) {
		console.error(error);
	}
};