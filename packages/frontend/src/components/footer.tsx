export function Footer() {
	return (
		<footer className="fixed bottom-0 w-full bg-slate-200 h-16 flex flex-col justify-end">
			<div className="flex justify-evenly items-center">
				<a
					href="/"
					className={`pb-[calc(1rem+env(safe-area-inset-bottom))] ${window.location.pathname === `/` ? `border-b-4 border-b-teal-700 ` : ``}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="#000000"
						viewBox="0 0 256 256"
						className={window.location.pathname === `/` ? `fill-teal-700` : ``}
					>
						<title>explore icon</title>
						<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm51.58,57.79-32,64a4.08,4.08,0,0,1-1.79,1.79l-64,32a4,4,0,0,1-5.37-5.37l32-64a4.08,4.08,0,0,1,1.79-1.79l64-32A4,4,0,0,1,179.58,81.79Z"></path>
					</svg>
				</a>

				<a
					href="/about"
					className={`pb-[calc(1rem+env(safe-area-inset-bottom))] ${window.location.pathname === `/about` ? `border-b-4 border-b-teal-700 ` : ``}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="#000000"
						viewBox="0 0 256 256"
						className={
							window.location.pathname === `/about` ? `fill-teal-700` : ``
						}
					>
						<title>profile icon</title>
						<path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
					</svg>
				</a>
			</div>
		</footer>
	);
}
