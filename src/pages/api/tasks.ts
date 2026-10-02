import { buildFindQuery, fetchTasks } from "@/server/db/tasks/fetchTasks.ts";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
	const findQuery = buildFindQuery(url);
	const tasks = await fetchTasks(findQuery);

	return Response.json(tasks);
};
