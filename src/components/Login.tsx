import { ChangeEvent, FormEvent, useState } from "react";
import { useFormStatus } from "react-dom";
import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { signIn, signOut } from "next-auth/react";
import colors from "@/styles/colors";

type LoginInput = {
	username: string;
	password: string;
};

export default function Login() {
	const [inputs, setInputs] = useState<LoginInput>({
		username: "",
		password: "",
	});
	const [errorMsg, setErrorMsg] = useState("");
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const res = await signIn("credentials", {
			username: inputs.username,
			password: inputs.password,
			redirect: false,
		});
		if (!res?.ok) {
			setErrorMsg("Nombre o contraseña inválidos");
		} else {
			setErrorMsg("");
		}
	};
	const handleLogout = async () => {
		await signOut();
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				marginTop: "20px",
				width: "100%",
			}}
		>
			<form onSubmit={handleSubmit}>
				<Box
					sx={{
						position: "relative",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "24px",
						marginTop: "20px",
						width: "100%",
					}}
				>
					<TextField
						id='username'
						name='username'
						type='text'
						label='Usuario'
						required
						fullWidth
						variant='standard'
						value={inputs.username || ""}
						onChange={handleChange}
						sx={{
							width: {
								xs: "250px",
								sm: "250px",
								md: "450px",
								lg: "450px",
								xl: "450px",
							},
							borderBottom: `1px solid ${colors.primary}!important`,
							paddingBottom: "4px",
						}}
					/>
					<TextField
						id='password'
						name='password'
						type='password'
						label='Contraseña'
						fullWidth
						required
						variant='standard'
						value={inputs.password || ""}
						onChange={handleChange}
						sx={{
							width: {
								xs: "250px",
								sm: "250px",
								md: "450px",
								lg: "450px",
								xl: "450px",
							},
							borderBottom: `1px solid ${colors.primary}!important`,
							paddingBottom: "4px",
						}}
					/>
					{errorMsg && <FormHelperText>{errorMsg}</FormHelperText>}
					<LoginButton />
				</Box>
			</form>
		</Box>
	);
}

function LoginButton() {
	return (
		<Button
			type='submit'
			variant='outlined'
			color='primary'
			sx={{
				borderRadius: "32px",
				backgroundColor: colors.secondary,
				border: `1px solid ${colors.primary}!important`,
				padding: "16px 32px!important",
				color: `${colors.primary}!important`,
				marginBottom: {
					xs: "64px",
					sm: "64px",
					md: "0px",
					lg: "0px",
					xl: "0px",
				},
			}}
		>
			Entrar
		</Button>
	);
}
