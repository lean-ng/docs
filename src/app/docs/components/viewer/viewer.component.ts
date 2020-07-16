import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-viewer',
  templateUrl: './viewer.component.html'
})
export class ViewerComponent implements OnInit {

  uri = 'assets/docs/debugging/index.md';

  constructor() { }

  ngOnInit(): void {
  }

}
