import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

export function Main({ children, className }: Props) {
	return <main className={`mt-16 ${className ?? ""}`}>{children}</main>;
}
