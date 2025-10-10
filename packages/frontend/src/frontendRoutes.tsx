import type { ReactElement } from "react";
import { HowToCreateThis } from "./articles/how-to-create-this";
import { HowToCreateThisAgain } from "./articles/how-to-create-this-again";
import { AboutPage } from "./pages/aboutPage";
import { BlogListPage } from "./pages/blogListPage";

type Page = {
	title: string;
	component: ReactElement;
};

export type FrontendRoutes = Map<string, Page>;

export const frontendRoutes: FrontendRoutes = new Map();

frontendRoutes.set("/", {
	title: "Eriec // Dev/Log",
	component: <BlogListPage />,
});
frontendRoutes.set("/about", {
	title: "About",
	component: <AboutPage />,
});
frontendRoutes.set("/how-to-create-this", {
	title: "How to create this?",
	component: <HowToCreateThis />,
});
frontendRoutes.set("/how-to-create-this-again", {
	title: "How to create this again?",
	component: <HowToCreateThisAgain />,
});

type Article = {
	slug: string;
	title: string;
	categoryId: string;
	thumbnailUrl: string;
	estimatedReadingTime: number;
	createdAt: string;
};

class FrontendRouter {
	private routes = new Map<string, Page>();
	private articles: Article[] = [{}];

	getArticles(categoryId: string): Article[] {
		return this.articles
			.values()
			.filter((article) => article.categoryId === categoryId);
	}
}
