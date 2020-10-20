import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavItem } from './models/nav-item';
import { TocService } from './services/toc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  navItems: Observable<NavItem[]>;

  constructor(private tocService: TocService) {
    this.navItems = tocService.navItems;
  }

}
