import { type NextAuthOptions, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function getUser(username: string) {
	try {
		return await prisma.guest.findUnique({ where: { username } });
	} catch (error) {
		console.error("Failed to fetch guest", error);
		throw new Error("Failed to fetch guest");
	}
}

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, account }) {
			if (account && account.type === "credentials") {
				token.userId = account.providerAccountId;
			}
			return token;
		},
		async session({ session, token }) {
			session.user.id = token.userId;
			return session;
		},
	},
	pages: {
		signIn: "/home",
	},
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				username: { label: "username", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials, req) {
				const parsedCredentials = z
					.object({
						username: z.string(),
						password: z.string().min(6),
					})
					.safeParse(credentials);
				if (parsedCredentials.success) {
					const { username, password } = parsedCredentials.data;
					const user = await getUser(username);
					console.log(user);
					if (!user) return null;
					const passwordsMatch = password == user.password;
					if (passwordsMatch) return user;
				}
				return null;
			},
		}),
	],
};

export const getServerAuthSession = () => getServerSession(authOptions);