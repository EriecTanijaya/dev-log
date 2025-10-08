import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";

export function AboutPage() {
	return (
		<div>
			<Header />
			<Main className="p-3 flex flex-col gap-6">
				<h1 className="text-3xl font-bold">What is this?</h1>
				<p>
					This is the web app project that i create mainly to learn tailwindcss.
					In the middle of creating this app, i also learn a bit about Docker.
				</p>

				<p>
					This web app is built on top of the Bun as the web server, and React
					as the UI library for the page and component for frontend
				</p>
			</Main>
			<Footer />
		</div>
	);
}
