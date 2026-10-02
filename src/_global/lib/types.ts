import type { TaskItem } from "@/server/db/types.ts";

export type PageProps = {
	data: {
		tasks: TaskItem[];
	};
};
