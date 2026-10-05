import { createTask } from "@/server/db/tasks/createTask.ts";
import { createTaskSchema, validateSafeParse } from "@/_global/lib/validate.ts";
import type { APIRoute } from "astro";
import type { CreateTaskSchema } from "@/_global/lib/validate.ts";

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const result = validateSafeParse(createTaskSchema, Object.fromEntries(data) as CreateTaskSchema);
	if (!result.success) return Response.json({ message: 'Missing fields' }, { status: 400 });

	await createTask(result.output);

	return Response.json({}, { status: 201 });
};
