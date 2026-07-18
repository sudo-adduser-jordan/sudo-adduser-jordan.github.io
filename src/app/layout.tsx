import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import NoiseOverlay from "@/components/noise-overlay"

const spaceGrotesk = localFont({
	src: "../../public/fonts/0c89a48fa5027cee-s.p.4564287c.woff2",
	display: "swap",
	variable: "--font-space-grotesk",
})

const geistMono = localFont({
	src: "../../public/fonts/GeistMono_Variable.p.73882635.woff2",
	display: "swap",
	variable: "--font-geist-mono",
})

export const metadata: Metadata = {
	title: "Jordan",
	description: "",
	// icons: { icon: "/favicon.ico" },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${spaceGrotesk.variable} ${geistMono.variable} text-black bg-white dark:text-white dark:bg-black scroll-smooth`}
		>
			<head>
				<meta name="next-size-adjust" content="" />
			</head>
			<body className="antialiased relative overflow-x-hidden">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NoiseOverlay />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
