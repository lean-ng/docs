export interface Page {
  route: string;
  path: string;
  title: string;
  children?: Page[];
}

export function *iteratePages(pages: Page[]): Iterable<Page> {
  for (const p of pages) {
    yield p;
    if (p.children) {
      yield *iteratePages(p.children);
    }
  }
}
