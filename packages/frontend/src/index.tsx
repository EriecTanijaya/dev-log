import { createRoot } from "react-dom/client";
import "./styles.css";
import { BlogList } from "./pages/blogList";

const rootElem = document.getElementById("root");

if (!rootElem) {
	throw new Error("Root element not found");
}

const root = createRoot(rootElem);

root.render(<BlogList />);
