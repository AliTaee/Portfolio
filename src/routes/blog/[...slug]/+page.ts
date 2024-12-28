import { error } from "@sveltejs/kit"
import type { ServerLoadEvent } from "@sveltejs/kit"

export const load = async ({ params }: ServerLoadEvent) => {
    try {
        const cleanSlug = params.slug?.replace(/\/$/, "")
        const postUrl = `../../../posts/${cleanSlug}`
        const post = await import(`${postUrl}.md`)

        return {
            content: post.default,
            meta: post.metadata,
        }
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }
}