import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Page } from './model/page';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TocResolverService implements Resolve<Page[]> {

  constructor(private http: HttpClient) { }

  resolve(): Promise<Page[]> {
    return this.http.get<Page[]>('assets/docs/index.json').toPromise();
  }
}
