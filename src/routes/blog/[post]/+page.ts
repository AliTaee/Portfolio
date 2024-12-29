import { error } from "@sveltejs/kit"
import type { ServerLoadEvent } from "@sveltejs/kit"

export const load = async ({ params }: ServerLoadEvent) => {
    try {
        const post = await import(`../../../posts/${params.post}.md`)

        return {
            content: post.default,
            meta: post.metadata as Post,
            postURL: `/blog/${params.post}`
        }
    } catch (e) {
        throw error(404, `Could not find ${params.post}`)
    }
}