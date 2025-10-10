import type { Article } from "../articles/article";
import { categories } from "../categories";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";

type BlogListPageProps = {
	articles: Article[];
};

export function BlogListPage({ articles }: BlogListPageProps) {
	// todo: create a whole page first, and then separate the components

	return (
		<div>
			<Header />
			<Main className="h-[calc(100vh---spacing(16))] snap-y snap-mandatory overflow-y-scroll">
				{categories.map((category) => (
					<CategoryCard
						key={category.categoryId}
						description={category.description}
						name={category.name}
						articles={articles}
					/>
				))}

				<MediaCategoryCard
					description="Things that i want to shared with you"
					name="Media"
				/>
			</Main>
			<Footer />
		</div>
	);
}

type CategoryCardProps = {
	description: string;
	name: string;
	articles: Article[];
};

function CategoryCard({ description, name, articles }: CategoryCardProps) {
	return (
		<div className="snap-start h-[calc(100vh---spacing(32))] flex flex-col justify-start space-y-5 pt-4 last:mb-16">
			<div className="flex flex-col space-y-3 mx-3">
				<h1 className="font-extrabold text-3xl">{name}</h1>
				<p>{description}</p>
			</div>
			<div className="flex flex-col space-y-3">
				<h1 className="font-bold text-xl mx-3">Articles</h1>
				<div className="flex snap-mandatory snap-x overflow-x-auto gap-3 scroll-px-3">
					{articles.map((article) => (
						<ArticleCard
							createdAt={article.createdAt}
							estimatedReadingTime={article.estimatedReadingTime}
							imageUrl={article.thumbnailUrl}
							title={article.title}
							slug={article.slug}
							key={article.slug}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

type MediaCategoryCardProps = {
	name: string;
	description: string;
};

function MediaCategoryCard({ name, description }: MediaCategoryCardProps) {
	return (
		<div className="snap-start h-[calc(100vh---spacing(32))] flex flex-col justify-start space-y-5 pt-4 last:mb-16">
			<div className="flex flex-col space-y-3 mx-3">
				<h1 className="font-extrabold text-3xl">{name}</h1>
				<p>{description}</p>
			</div>
			<div className="flex snap-mandatory snap-x overflow-x-auto gap-3 scroll-px-3">
				<img
					src="assets/landscape.jpg"
					alt="landscape"
					className="snap-start size-80 aspect-square object-cover object-center first:ml-3 last:mr-3"
				/>
				<img
					src="assets/portrait.jpg"
					alt="portrait"
					className="snap-start size-80 aspect-square object-cover object-center first:ml-3 last:mr-3"
				/>
				<img
					src="assets/landscape.jpg"
					alt="landscape"
					className="snap-start size-80 aspect-square object-cover object-center first:ml-3 last:mr-3"
				/>
			</div>
		</div>
	);
}

type ArticleCardProps = {
	title: string;
	imageUrl: string;
	estimatedReadingTime: number;
	createdAt: string;
	slug: string;
};

function ArticleCard({
	createdAt,
	estimatedReadingTime,
	imageUrl,
	title,
	slug,
}: ArticleCardProps) {
	return (
		<a href={`/${slug}`} className="first:ml-3 last:mr-3">
			<div className="relative size-80 snap-start">
				<img
					src={imageUrl}
					alt="placehold"
					className="size-80 object-cover object-center"
				/>
				<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
				<div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-4">
					<h1 className="text-2xl text-white font-semibold wrap-break-word">
						{title}
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
							<p className="text-white text-sm">{estimatedReadingTime} min</p>
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
								<title>date</title>
								<path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
							</svg>
							<p className="text-white text-sm">{createdAt}</p>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
}
