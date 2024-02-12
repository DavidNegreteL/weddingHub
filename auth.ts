import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getGuest(username: string) {
	try {
		return await prisma.guest.findUnique({ where: { username } });
	} catch (error) {
		console.error('Failed to fetch guest', error);
		throw new Error('Failed to fetch guest');
	}
}

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({
						username: z.string(),
						password: z.string().min(6),
					})
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { username, password } = parsedCredentials.data;
					const guest = await getGuest(username);
					if (!guest) return null;
					const passwordsMatch = password == guest.password;
					if (passwordsMatch) return guest;
				}
				console.log('Invalid credentials');
				return null;
			},
		}),
	],
});
