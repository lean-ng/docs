import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../model/page';

@Component({
  selector: 'docs-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  toc: Page[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe( ({ toc }) => {
      this.toc = toc;
    });
  }

}
