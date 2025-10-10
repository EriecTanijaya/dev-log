export function ArticleHeader() {
	return (
		<header className="flex fixed w-full h-16 p-4 items-center bg-slate-200 top-0 gap-3 z-1">
			<a href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 256 256"
				>
					<title>back icon</title>
					<path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path>
				</svg>
			</a>
			<div className="flex flex-col">
				<h2 className="font-black">
					{/** biome-ignore lint/suspicious/noCommentText: double slash for name */}
					Eriec // Dev/Log
				</h2>
				<p className="text-xs text-teal-700 font-semibold">
					29 JULY 1998 - BLOG
				</p>
			</div>
		</header>
	);
}
