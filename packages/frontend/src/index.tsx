import { createRoot } from "react-dom/client";
import "./styles.css";
import { ArticlePage } from "./pages/articlePage";
import { BlogListPage } from "./pages/blogListPage";

const rootElem = document.getElementById("root");

if (!rootElem) {
	throw new Error("Root element not found");
}

const root = createRoot(rootElem);

const routes = new Map();

routes.set("/", <BlogListPage />);
routes.set("/detail", <ArticlePage />);

root.render(routes.get(window.location.pathname));

// todo
// create the easter egg on browser console
