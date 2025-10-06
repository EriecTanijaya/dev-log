import { serve } from "bun";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import indexPage from "./frontend/src/index.html";

// todo: https://docs.docker.com/guides/bun/develop/

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

const db = drizzle(process.env.DATABASE_URL!);

export const usersTable = pgTable("users", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	age: integer().notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
});

async function testDB() {
	const user: typeof usersTable.$inferInsert = {
		name: "John",
		age: 30,
		email: "john@example.com",
	};
	await db.insert(usersTable).values(user);
	console.log("New user created!");
	const users = await db.select().from(usersTable);
	console.log("Getting all users from the database: ", users);
	/*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */
	await db
		.update(usersTable)
		.set({
			age: 31,
		})
		.where(eq(usersTable.email, user.email));
	console.log("User info updated!");
	await db.delete(usersTable).where(eq(usersTable.email, user.email));
	console.log("User deleted!");
}

testDB();

console.log(`Server listening on ${server.url}`);
