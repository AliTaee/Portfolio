import { fetchMarkdownPosts } from "$lib/utils";
import { json } from "@sveltejs/kit"

export async function GET() {
    const allPosts = await fetchMarkdownPosts();

    const sortedPosts = allPosts.sort((firstPost, secondPost) => {
        return new Date(secondPost.meta.date).getTime() - new Date(firstPost.meta.date).getTime();
    });

    return json(sortedPosts)
}

export const prerender = true