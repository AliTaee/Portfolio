type DateStyle = Intl.DateTimeFormatOptions["dateStyle"]

export function formatDate(date: string, dateStyle: DateStyle = "medium", locales = "en") {
    // Safari is mad about dashes in the date
    const dateToFormat = new Date(date.replaceAll("-", "/"))
    const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
    return dateFormatter.format(dateToFormat)
}

export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/posts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver() as { metadata: Post };
            const postPath = path.split("/").at(-1)?.replace(".md", "");

            return {
                meta: metadata,
                path: postPath
            };
        })
    );

    return allPosts;
};