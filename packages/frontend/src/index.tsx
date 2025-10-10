import { createRoot } from "react-dom/client";
import "./styles.css";
import { FrontendRouter } from "./frontendRouter";

const rootElem = document.getElementById("root");

if (!rootElem) {
	throw new Error("Root element not found");
}

const root = createRoot(rootElem);

const frontendRouter = new FrontendRouter();

const slug = window.location.pathname.split("/")[1];

if (slug === undefined) {
	throw new Error("No slug found");
}

const page = frontendRouter.getRoutes().get(slug);

document.title = page?.title ?? "";

root.render(page?.component);

// todo
// create the easter egg on browser console
