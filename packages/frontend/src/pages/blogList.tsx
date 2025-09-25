import type { ReactNode } from "react";

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
		<div className="flex flex-col min-h-screen">
			<header className="flex h-15 p-4 items-center bg-slate-200">
				<p className="font-black">
					{/** biome-ignore lint/suspicious/noCommentText: double slash for name */}
					Eriec // Dev/Log
				</p>
			</header>
			<main className="flex items-center grow pb-15 justify-center px-5">
				<div></div>
				<div>
					<div className="space-y-5 w-full">
						<h1 className="font-semibold text-5xl">Blogs</h1>
						<p>whatever writings</p>
					</div>
					<div>
						<h1 className="font-medium">feat: initial commit</h1>
						<div className="h-3">
							<img src="assets/blog-portrait-image.jpg" alt="blog" />
						</div>
					</div>
				</div>
			</main>
			<footer className="flex fixed bottom-0 w-full justify-evenly items-center bg-slate-200 pt-2 max-h-15">
				<a href="#" className="border-b-4 pb-4 border-b-slate-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="#000000"
						viewBox="0 0 256 256"
						className="fill-slate-600"
					>
						<title>explore icon</title>
						<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm51.58,57.79-32,64a4.08,4.08,0,0,1-1.79,1.79l-64,32a4,4,0,0,1-5.37-5.37l32-64a4.08,4.08,0,0,1,1.79-1.79l64-32A4,4,0,0,1,179.58,81.79Z"></path>
					</svg>
				</a>

				<a href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="#000000"
						viewBox="0 0 256 256"
						className="fill-slate-600"
					>
						<title>profile icon</title>
						<path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
					</svg>
				</a>
			</footer>
		</div>
	);
}
