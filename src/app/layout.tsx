import { Montserrat } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es' className={montserrat.className}>
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					{children}
					<Analytics />
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
