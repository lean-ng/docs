import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from '../models/nav-item';
import { TocEntry } from '../models/toc-entry';

@Injectable({
  providedIn: 'root'
})
export class TocService {

  private entries: TocEntry[] = [];
  navItems = new BehaviorSubject<NavItem[]>([]);

  constructor(private http: HttpClient) {
    http.get<TocEntry[]>('/assets/toc.json').subscribe( entries => {
      this.entries = entries;
      const navItems: NavItem[] = [];
      entries.forEach(entry => {
        const item: NavItem = { title: entry.title, children: [] };
        navItems.push(item);
        entry?.children?.forEach( child => {
          item.children?.push({ title: child.title, path: `/docs/${entry.path}/${child.path}`});
        });
      });
      this.navItems.next(navItems);
    });
  }

  mapUriToPath(uri: UrlSegment[]): string {
    // TODO: validate uri
    const path = uri.length ? uri.join('/') : 'index';
    return '/assets/' + path + '.md';
  }
}
