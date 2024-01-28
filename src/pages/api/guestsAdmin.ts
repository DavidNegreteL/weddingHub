import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getGuests = async (res: NextApiResponse) => {
	let guests;
	guests = await prisma.gift.findMany();

	res.status(200).json(guests);
};

const updateGuest = async (data: Guest, res: NextApiResponse) => {
	const { id, name, status, max_attendees, attendees } = data;
	const guest = await prisma.guest.update({
		where: { id },
		data: { name, status, max_attendees, attendees },
	});
	if (guest) {
		res.status(204).end();
	} else {
		res.status(404).json({ message: 'Guest not found' });
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
		getGuests(res);
	} else if (req.method === 'PUT') {
		updateGuest(req.body, res);
	} else {
		res.status(400).json({ message: 'Invalid HTTP method' });
	}
}
