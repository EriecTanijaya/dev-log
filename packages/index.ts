import { serve } from "bun";
import blogListPage from "./frontend/src/pages/blogList.html";

const server = serve({
	routes: {
		"/": blogListPage,
		"/assets/*": {
			GET: (req) => {
				const wantedAsset = req.url.split("/assets/")[1];

				return new Response(
					Bun.file(`./packages/frontend/src/assets/${wantedAsset}`),
				);
			},
		},
	},
	development: {
		console: true,
		hmr: true,
	},
});

console.log(`Server listening on ${server.url}`);
