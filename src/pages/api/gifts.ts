import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextApiRequestQuery } from 'next/dist/server/api-utils';

const prisma = new PrismaClient();

const getGifts = async (query: NextApiRequestQuery, res: NextApiResponse) => {
	const { guestId } = query;
	let gifts;

	gifts = await prisma.gift.findMany({
		where: {
			guestId: guestId
				? {
						equals: Array.isArray(guestId) ? guestId[0] : guestId,
						mode: 'insensitive',
				  }
				: null,
		},
	});

	if (gifts) {
		res.status(200).json(gifts);
	} else {
		res.status(404).json({ mensaje: 'Not Found' });
	}
};

const updateGift = async (
	data: Pick<Gift, 'id' | 'guestId'>,
	res: NextApiResponse
) => {
	const { id, guestId } = data;
	const gift = await prisma.gift.update({
		where: { id },
		data: { guestId },
	});
	if (gift) {
		res.status(204).end();
	} else {
		res.status(404).json({ message: 'Gift not found' });
	}
};

/**
 * Handles HTTP requests for creating, reading, updating and deleting contacts.
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 * @returns A Promise that resolves to void.
 */
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		getGifts(req.query, res);
	} else if (req.method === 'PUT') {
		updateGift(req.body, res);
	} else {
		res.status(400).json({ message: 'Invalid HTTP method' });
	}
}
