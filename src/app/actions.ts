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
