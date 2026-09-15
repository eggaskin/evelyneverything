// The site is served from a sub-path on GitHub Pages (e.g. /evelyneverything/),
// so internal links must be prefixed with the configured base instead of
// starting at the domain root.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const isExternal = (path: string) => /^([a-z][a-z\d+.-]*:|\/\/|#)/i.test(path);

/** Prefix an internal path with the site base. External URLs pass through unchanged. */
export function url(path = '/'): string {
  if (isExternal(path)) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Remove the site base from a pathname, e.g. for active-link checks. */
export function stripBase(pathname: string): string {
  if (base && pathname.startsWith(base)) {
    return pathname.slice(base.length) || '/';
  }
  return pathname;
}
