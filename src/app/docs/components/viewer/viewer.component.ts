import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, ReplaySubject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Page, iteratePages } from '../../model/page';

@Component({
  selector: 'docs-viewer',
  templateUrl: './viewer.component.html'
})
export class ViewerComponent implements OnInit, OnDestroy {

  uri: string | undefined;

  #pages = new ReplaySubject<Page[]>(1);

  #urlSubScription: Subscription | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Page[]>('assets/docs/index.json').subscribe(this.#pages);

    this.#urlSubScription = this.route.url.subscribe(
      segments => {
        this.#pages.subscribe(
          pages => {

            const route = segments.map(s => s.path).join('/');

            this.uri = 'not-found.md';
            for (const page of iteratePages(pages)) {
              if (page.route === route) {
                this.uri = 'assets/docs/' + page.path;
              }
            }

          }
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.#urlSubScription?.unsubscribe();
  }
}
