import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateGift = async (
	data: Omit<Gift, 'guestId'>,
	res: NextApiResponse
) => {
	const { id, name, image, url_amazon, url_mercado, url_marketplace } = data;
	const gift = await prisma.gift.update({
		where: { id },
		data: { name, image, url_amazon, url_mercado, url_marketplace },
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
	if (req.method === 'PUT') {
		updateGift(req.body, res);
	} else {
		res.status(400).json({ message: 'Invalid HTTP method' });
	}
}
