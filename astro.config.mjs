// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const mode = process.env.VITE_BUILD_MODE ?? 'ssr';
let config = {};
if (mode === 'ssr') {
	config = {
		output: 'server',
		adapter: node({
			mode: 'standalone'
		})
	};
}

// https://astro.build/config
export default defineConfig({
	...config,
});
