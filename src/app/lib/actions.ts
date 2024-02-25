"use server";

import { signIn } from "next-auth/react";

export async function authenticate(
	prevState: string | undefined,
	formData: FormData
) {
	try {
		await signIn("credentials", {
			username: formData.get("username"),
			password: formData.get("password"),
			callbackUrl: "/",
		});
	} catch (error) {
		if (error) {
			return "Something went wrong.";
		}
		throw error;
	}
}
