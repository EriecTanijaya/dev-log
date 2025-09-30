import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";

export function BlogListPage() {
	// todo: create a whole page first, and then separate the components

	return (
		<div>
			<Header />
			<Main className="h-[calc(100vh---spacing(16))] snap-y snap-mandatory overflow-y-scroll">
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
			</Main>
			<Footer />
		</div>
	);
}

function CategoryCard() {
	return (
		<div className="snap-start h-[calc(100vh---spacing(32))] flex flex-col justify-start space-y-5 pt-4 last:mb-16">
			<div className="flex flex-col space-y-3 mx-3">
				<h1 className="font-extrabold text-3xl">Blogs</h1>
				<p>whatever writings a;sd;lasdasd asdjasdjklasjdlasj dlasjdas</p>
			</div>
			<div className="flex flex-col space-y-3">
				<h1 className="font-bold text-xl mx-3">Articles</h1>
				<div className="flex snap-mandatory snap-x overflow-x-auto gap-3 scroll-px-3">
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
		<a href="/detail" className="first:ml-3 last:mr-3">
			<div className="relative size-80 snap-start">
				<img
					src="assets/blog-landscape-image.jpg"
					alt="placehold"
					className="size-80"
				/>
				<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
				<div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-4">
					<h1 className="text-2xl text-white font-semibold wrap-break-word">
						why i write this shitttttt
					</h1>
					<div className="flex flex-row gap-6">
						<div className="flex flex-row items-center space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="#000000"
								viewBox="0 0 256 256"
								className="fill-white"
							>
								<title>clock icon</title>
								<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
							</svg>
							<p className="text-white text-sm">12 min</p>
						</div>
						<div className="flex flex-row items-center space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="#000000"
								viewBox="0 0 256 256"
								className="fill-white"
							>
								<title>heart icon</title>
								<path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
							</svg>
							<p className="text-white text-sm">245</p>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
}
