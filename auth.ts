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
		async jwt({ token, account, profile }) {
			if (account && account.type === "credentials") {
				token.userId = account.providerAccountId;
			}
			return token;
		},
		async session({ session, token, user }) {
			session.user.id = token.userId;
			return session;
		},
	},
	pages: {
		signIn: "/",
	},
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				username: { label: "Usuario", type: "text" },
				password: { label: "Contraseña", type: "password" },
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
