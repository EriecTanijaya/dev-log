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

		"/api/categories": {
			GET: () => {
				return Response.json([
					{
						id: 1,
						name: "Category 1",
					},
					{
						id: 2,
						name: "Category 2",
					},
					{
						id: 3,
						name: "Category 3",
					},
				]);
			},
		},
	},
	development: {
		console: true,
		hmr: true,
	},
});

import { SQL } from "bun";

const pg = new SQL(process.env.DATABASE_URL!);

const res = await pg`SELECT 1`;

console.log({ res });

console.log(`Server listening on ${server.url}`);
