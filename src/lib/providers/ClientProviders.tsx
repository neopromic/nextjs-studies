"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export const ClientProviders = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<ThemeProvider
			attribute="class"
			storageKey="app-theme"
			disableTransitionOnChange
			defaultTheme="dark"
		>
			{children}
		</ThemeProvider>
	);
};
