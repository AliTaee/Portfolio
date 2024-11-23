// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Post {
		title: string
		slug: string
		description: string
		image?: string
		imageAppreciation?: string
		imageAlt?: string
		date: string
		categories?: string[]
		published: boolean
	}
}

export { }
