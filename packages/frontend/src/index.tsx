import { createRoot } from "react-dom/client";
import "./styles.css";
import type { ReactElement } from "react";
import { AboutPage } from "./pages/aboutPage";
import { ArticlePage } from "./pages/articlePage";
import { BlogListPage } from "./pages/blogListPage";

const rootElem = document.getElementById("root");

if (!rootElem) {
	throw new Error("Root element not found");
}

const root = createRoot(rootElem);

type Page = {
	title: string;
	component: ReactElement;
};

const routes = new Map<string, Page>();

routes.set("/", {
	title: "Eriec // Dev/Log",
	component: <BlogListPage />,
});
routes.set("/detail", {
	title: "Article Title",
	component: <ArticlePage />,
});
routes.set("/about", {
	title: "About",
	component: <AboutPage />,
});

const page = routes.get(window.location.pathname);

document.title = page?.title ?? "";

root.render(page?.component);

// todo
// create the easter egg on browser console
