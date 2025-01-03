import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex, escapeSvelte } from 'mdsvex'
import { bundledLanguages, getSingletonHighlighter } from 'shiki'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (/** @type {string} */ code, lang = 'text') => {
			const highlighter = await getSingletonHighlighter({
				themes: ['tokyo-night'],
				langs: Object.keys(bundledLanguages)
			})
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'tokyo-night' }))
			return html
		}
	},
	remarkPlugins: [rehypeUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		prerender: {
			handleHttpError: ({ status, path }) => {
				if (status === 404) {
					console.warn(`404 error encountered: ${path}`)
					return
				}
				throw new Error(`Prerendering failed for ${path} with status ${status}`)
			}
		},
		adapter: adapter({
			pages: 'public',
			assets: 'public'
		})
	}
}

export default config
