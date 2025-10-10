import { createRoot } from "react-dom/client";
import "./styles.css";
import { frontendRoutes } from "./frontendRoutes";

const rootElem = document.getElementById("root");

if (!rootElem) {
	throw new Error("Root element not found");
}

const root = createRoot(rootElem);

const page = frontendRoutes.get(window.location.pathname);

document.title = page?.title ?? "";

root.render(page?.component);

// todo
// create the easter egg on browser console
