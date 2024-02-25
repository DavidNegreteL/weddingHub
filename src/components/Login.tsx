import { useFormState, useFormStatus } from "react-dom";
import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { authenticate } from "@/app/lib/actions";
import colors from "@/styles/colors";

export default function Login() {
	const theme = useTheme();
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				marginTop: "20px",
				width: "100%",
			}}
		>
			<form action={dispatch}>
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
						name='username'
						type='text'
						label='Usuario'
						fullWidth
						variant='standard'
						sx={{
							width: {
								xs: "250px",
								sm: "250px",
								md: "450px",
								lg: "450px",
								xl: "450px",
							},
							borderBottom: `1px solid ${colors.primary}!important`,
							paddingBottom: theme.spacings.xs,
						}}
					/>
					<TextField
						name='password'
						type='password'
						label='Contraseña'
						fullWidth
						variant='standard'
						sx={{
							width: {
								xs: "250px",
								sm: "250px",
								md: "450px",
								lg: "450px",
								xl: "450px",
							},
							borderBottom: `1px solid ${colors.primary}!important`,
							paddingBottom: theme.spacings.xs,
						}}
					/>
					{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}

					<LoginButton />
				</Box>
			</form>
		</Box>
	);
}

function LoginButton() {
	const { pending } = useFormStatus();
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
			aria-disabled={pending}
			disabled={pending}
		>
			Entrar
		</Button>
	);
}
