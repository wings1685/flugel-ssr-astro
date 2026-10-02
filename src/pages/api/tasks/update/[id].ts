import { updateTask } from "@/server/db/tasks/updateTask.ts";
import { updateTaskSchema, validateSafeParse } from "@/_global/lib/validate.ts";
import type { APIRoute } from "astro";

export const PUT: APIRoute = async ({ request, params }) => {
	const data = await request.json();
	const input = {
		...data,
		id: +(params.id ?? ''),
	};
	const result = validateSafeParse(updateTaskSchema, input);
	if (!result.success) return Response.json({ message: 'Missing fields' }, { status: 400 });

	await updateTask(result.output);

	return Response.json({}, { status: 201 });
};
