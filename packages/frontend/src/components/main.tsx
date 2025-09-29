import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

export function Main({ children, className }: Props) {
	return (
		<main className={`h-[calc(100vh---spacing(16))] mt-16 ${className ?? ""}`}>
			{children}
		</main>
	);
}
