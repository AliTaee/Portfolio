/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'mdsvex' {
    import { Plugin } from 'vite';

    export interface MdsvexOptions {
        extensions?: string[];
        layout?: Record<string, string>;
        highlight?: {
            highlighter?: (code: string, lang: string) => string | Promise<string>;
        };
        remarkPlugins?: any[];
        rehypePlugins?: any[];
    }

    export function mdsvex(options?: MdsvexOptions): Plugin;

    /**
     * Escapes Svelte-specific syntax to avoid conflicts in rendered HTML.
     * Useful for ensuring code samples are correctly displayed in markdown.
     */
    export function escapeSvelte(html: string): string;
}