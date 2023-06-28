import "@styles/globals.css";

import Root from "./root";

export const metadata = {
	title: "IntelliDetect Pro",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Root>{children}</Root>
		</html>
	);
}
