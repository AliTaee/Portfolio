import { fetchMarkdownPosts } from "$lib/utils";
import { json } from "@sveltejs/kit"

export async function GET() {
    const allPosts = await fetchMarkdownPosts();
    return json(allPosts)
}

export const prerender = true