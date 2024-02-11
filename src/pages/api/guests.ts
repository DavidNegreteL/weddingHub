import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextApiRequestQuery } from 'next/dist/server/api-utils';

const prisma = new PrismaClient();

const getGuest = async (query: NextApiRequestQuery, res: NextApiResponse) => {
	const { guestId } = query;
	let guest;

	const singleGuestId = Array.isArray(guestId) ? guestId[0] : guestId;

	if (typeof singleGuestId === 'string' && singleGuestId !== '') {
		guest = await prisma.guest.findUnique({
			where: {
				id: singleGuestId,
			},
		});
	}

	res.status(200).json(guest);
};

const updateGuest = async (
	data: Omit<Guest, 'name' | 'max_attendees'>,
	res: NextApiResponse
) => {
	const { id, status, attendees } = data;
	const guest = await prisma.guest.update({
		where: { id },
		data: { status, attendees },
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
		getGuest(req.query, res);
	} else if (req.method === 'PUT') {
		updateGuest(req.body, res);
	} else {
		res.status(400).json({ message: 'Invalid HTTP method' });
	}
}
