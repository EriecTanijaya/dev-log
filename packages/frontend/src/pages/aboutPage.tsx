import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";

export function AboutPage() {
	return (
		<div>
			<Header />
			<Main className="p-3 flex flex-col gap-6">
				<img
					src="assets/blog-portrait-image.jpg"
					alt="blog"
					className="size-80 m-auto object-cover object-center"
				/>
				<h1 className="text-3xl font-bold">why i write this shitttttt</h1>
				<p>mantap broooo</p>
			</Main>
			<Footer />
		</div>
	);
}
