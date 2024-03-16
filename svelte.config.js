// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from 'svelte-adapter-github';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
		  // default options are shown. On some platforms
		  // these options are set automatically — see below
		  pages: 'docs',
		  assets: 'docs',
		  fallback: null,
		  precompress: false,
		  domain: '',
		  jekyll: false
		})
	},
	base: "/Pixels-Life-Series",
	preprocess: [vitePreprocess()]
};

export default config;
