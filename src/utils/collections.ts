import { getCollection, type CollectionEntry } from 'astro:content';

type ContentCollection = 'blog' | 'projects';

/**
 * Entries that should appear on the site, newest first.
 * Drafts (`draft: true`) are visible in `astro dev` but excluded from production builds.
 */
export async function getPublished<C extends ContentCollection>(collection: C): Promise<CollectionEntry<C>[]> {
  const entries: CollectionEntry<C>[] = await getCollection(collection);
  return entries
    .filter(entry => import.meta.env.DEV || !entry.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
