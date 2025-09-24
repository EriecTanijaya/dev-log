import type { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
};

function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className="py-3 px-4 bg-slate-400 rounded-lg not-active:border-b-4 border-b-slate-800"
			{...props}
		>
			{children}
		</button>
	);
}

export function BlogList() {
	// todo: create a whole page first, and then separate the components

	return (
		<div className="flex flex-col">
			<header>Header</header>
			<main>Main</main>
			<footer className="flex fixed bottom-0 w-full h-1/13 justify-evenly items-center bg-slate-200">
				<Button>
					<a href="#">Blogs</a>
				</Button>
				<Button>
					<a href="#">Settings</a>
				</Button>
			</footer>
		</div>
	);
}
