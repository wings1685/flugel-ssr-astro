import { createTask } from "@/server/db/tasks/createTask.ts";
import { createTaskSchema, validateSafeParse } from "@/_global/lib/validate.ts";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json();
	const result = validateSafeParse(createTaskSchema, data);
	if (!result.success) return Response.json({ message: 'Missing fields' }, { status: 400 });

	await createTask(result.output);

	return Response.json({}, { status: 201 });
};
