import ky from "ky";
import { BASE_URL } from "./shared.ts";

export const apiCreate = async <T extends object>(path: string, values: T) => {
	await ky.post(`${BASE_URL}/api${path}`, { json: values });

	return { success: true };
};

export const apiUpdate = async <T extends object>(path: string, values: T) => {
	await ky.put(`${BASE_URL}/api${path}`, { json: values });

	return { success: true };
};

export const apiDelete = async (path: string) => {
	await ky.delete(`${BASE_URL}/api${path}`);

	return { success: true };
};
