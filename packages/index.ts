import { serve } from "bun";

import indexPage from "./frontend/src/index.html";

const server = serve({
	routes: {
		"/": indexPage,
		"/detail": indexPage,
		"/about": indexPage,
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
