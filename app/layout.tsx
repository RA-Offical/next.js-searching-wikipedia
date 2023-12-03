import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WickiRocket!",
	description: "Practicing next.js and tailwindcss by making WickiRocket!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-slate-800`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
