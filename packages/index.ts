import { type RouterTypes, serve } from "bun";
import {
	FrontendRouter,
	type FrontendRoutes,
} from "./frontend/src/frontendRouter";
import indexPage from "./frontend/src/index.html";

const frontendRouter = new FrontendRouter();

const server = serve({
	routes: {
		"/assets/*": {
			GET: (req) => {
				const wantedAsset = req.url.split("/assets/")[1];

				return new Response(
					Bun.file(`./packages/frontend/src/assets/${wantedAsset}`),
				);
			},
		},
		...getServerRoutes(frontendRouter.getRoutes()),
	},
	development: {
		console: true,
		hmr: true,
	},
});

console.log(`Server listening on ${server.url}`);

function getServerRoutes(frontendRoutes: FrontendRoutes) {
	const entries = frontendRoutes
		.keys()
		.reduce((acc, cur) => {
			acc.set(`/${cur}`, indexPage);

			return acc;
		}, new Map<string, RouterTypes.RouteValue<string>>())
		.entries();

	return Object.fromEntries(entries);
}
