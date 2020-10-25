import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { TocService } from 'src/app/services/toc.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styles: [
  ]
})
export class ViewerComponent implements OnInit {

  resourceUri = '/';
  resourcePath = '/';

  constructor(private route: ActivatedRoute, private tocSvc: TocService) { }

  ngOnInit(): void {
    this.route.url
      .pipe(map(uri => this.tocSvc.mapUriToPath(uri)))
      .subscribe(path => this.resourcePath = path);
  }
}
