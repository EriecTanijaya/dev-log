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
				const url = new URL(req.url);

				const splitted = url.pathname.split("/");

				if (splitted.length < 4) {
					const wantedAsset = splitted[2];
					return new Response(
						Bun.file(`./packages/frontend/src/assets/${wantedAsset}`),
					);
				}

				const articleSlug = splitted[2];
				const wantedAsset = splitted[3];

				return new Response(
					Bun.file(
						`./packages/frontend/src/articles/${articleSlug}/assets/${wantedAsset}`,
					),
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
