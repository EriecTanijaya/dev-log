import type { ReactNode } from "react";
import exploreSvg from "../assets/compass.svg";
import profileSvg from "../assets/user-circle.svg";

type ButtonProps = {
	children: ReactNode;
};

function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className="py-1 px-2 bg-slate-400 rounded-lg not-active:border-b-4 border-b-slate-800"
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
			<header className="flex h-15 p-4 items-center bg-slate-200">
				<p className="font-black">
					{/** biome-ignore lint/suspicious/noCommentText: double slash for name */}
					Eriec // Dev/Log
				</p>
			</header>
			<main className="flex h-full">
				<div>
					<h1 className="font-semibold">Blogs</h1>
					<p>whatever writings</p>
				</div>
				<div></div>
			</main>
			<footer className="flex fixed bottom-0 w-full h-1/12 justify-evenly items-center bg-slate-200">
				<Button>
					<a href="#">
						<img src={exploreSvg} alt="explore" className="size-[24px]" />
					</a>
				</Button>
				<Button>
					<a href="#">
						<img src={profileSvg} alt="profile" className="size-[24px]" />
					</a>
				</Button>
			</footer>
		</div>
	);
}
