import { deleteTask } from "@/server/db/tasks/deleteTask.ts";
import { deleteTaskSchema, validateSafeParse } from "@/_global/lib/validate.ts";
import type { APIRoute } from "astro";

export const DELETE: APIRoute = async ({ params }) => {
	const input = {
		id: +(params.id ?? ''),
	};
	const result = validateSafeParse(deleteTaskSchema, input);
	if (!result.success) return Response.json({ message: 'Missing fields' }, { status: 400 });

	await deleteTask(result.output);

	return Response.json({}, { status: 201 });
};
