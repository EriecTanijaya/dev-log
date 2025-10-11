import type { ReactElement } from "react";
import type { Article } from "./articles/article";
import { howToCreateThis } from "./articles/how-to-create-this/how-to-create-this";
import { howToCreateThisAgain } from "./articles/how-to-create-this-again";
import { AboutPage } from "./pages/aboutPage";
import { BlogListPage } from "./pages/blogListPage";

type Page = {
	title: string;
	component: ReactElement;
};

export type FrontendRoutes = Map<string, Page>;

export class FrontendRouter {
	private routes: FrontendRoutes = new Map<string, Page>();
	private articles: Article[] = [howToCreateThis, howToCreateThisAgain];

	constructor() {
		this.setupRoutes();
	}

	private setupRoutes() {
		this.routes.set("", {
			title: "Eriec // Dev/Log",
			component: <BlogListPage articles={this.articles} />,
		});

		this.routes.set("about", {
			title: "About",
			component: <AboutPage />,
		});

		this.articles.forEach((article) => {
			this.routes.set(article.slug, {
				title: article.title,
				component: article.component,
			});
		});
	}

	getRoutes() {
		return this.routes;
	}
}
