export function BlogListPage() {
	// todo: create a whole page first, and then separate the components

	return (
		<div>
			<header
				className="flex fixed w-full h-16 p-4 items-center bg-slate-200 top-0
			"
			>
				<p className="font-black">
					{/** biome-ignore lint/suspicious/noCommentText: double slash for name */}
					Eriec // Dev/Log
				</p>
			</header>
			<main className="snap-y snap-mandatory overflow-y-scroll h-[calc(100vh---spacing(16))] mt-16">
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
			</main>
			<footer className="flex fixed bottom-0 w-full justify-evenly items-center bg-slate-200 h-16 pt-3">
				<a
					href="#"
					className="border-b-4 border-b-slate-600 pb-[calc(1rem+env(safe-area-inset-bottom))]"
				>
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

				<a href="#" className="pb-[calc(1rem+env(safe-area-inset-bottom))]">
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

function CategoryCard() {
	return (
		<div className="snap-start h-[calc(100vh---spacing(32))] m-3 flex flex-col justify-center space-y-16 last:mb-16">
			<div className="flex flex-col space-y-7">
				<h1 className="font-extrabold text-5xl">Blogs</h1>
				<p>
					whatever writings a;sjdkasjdkajd asdjaskdj alskdjalksd
					asldjaslkdjadjasd j akjsdjaskld jasdjals dlasdjalsdjals da
				</p>
			</div>
			<div className="flex flex-col space-y-9">
				<h1 className="font-bold text-lg">ARTICLES</h1>
				<div className="flex snap-mandatory snap-x overflow-x-auto">
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
				</div>
			</div>
		</div>
	);
}

function ArticleCard() {
	return (
		<a href="/detail">
			<div className="flex flex-col size-80 bg-cover bg-center snap-start shrink-0 mr-3.5 bg-slate-400 bg-[url(assets/blog-landscape-image.jpg)] bg-blend-multiply p-5 justify-between space-y-4">
				<h1 className="text-3xl text-white font-semibold wrap-break-word">
					why i write this shitttttt
				</h1>
				<div className="space-y-5">
					<div className="flex flex-row gap-6">
						<div className="flex flex-row items-center space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="#000000"
								viewBox="0 0 256 256"
								className="fill-white"
							>
								<title>clock icon</title>
								<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
							</svg>
							<p className="text-white font-semibold">12 min</p>
						</div>
						<div className="flex flex-row items-center space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="#000000"
								viewBox="0 0 256 256"
								className="fill-white"
							>
								<title>heart icon</title>
								<path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
							</svg>
							<p className="text-white font-semibold">245</p>
						</div>
					</div>
					<div className="flex flex-row items-center space-x-5">
						<img
							src="assets/profile.jpg"
							alt="profile"
							className="rounded-full size-14 object-cover"
						/>
						<p className="text-white">clara</p>
					</div>
				</div>
			</div>
		</a>
	);
}
