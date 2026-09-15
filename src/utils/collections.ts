import { getCollection, type CollectionEntry } from 'astro:content';

type ContentCollection = 'blog' | 'projects';

/**
 * Entries that should appear on the site, newest first.
 * Drafts (`draft: true`) are never rendered, in dev or production.
 */
export async function getPublished<C extends ContentCollection>(collection: C): Promise<CollectionEntry<C>[]> {
  const entries: CollectionEntry<C>[] = await getCollection(collection);
  return entries
    .filter(entry => !entry.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
