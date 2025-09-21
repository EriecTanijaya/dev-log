import { serve } from "bun";
import blogListPage from "./frontend/src/pages/blogList.html";

const server = serve({
	routes: {
		"/": blogListPage,
	},
	development: {
		console: true,
		hmr: true,
	},
});

console.log(`Server listening on ${server.url}`);
