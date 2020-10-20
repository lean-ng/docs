export interface TocEntry {
  path: string;
  title: string;
  children?: TocEntry[];
}
