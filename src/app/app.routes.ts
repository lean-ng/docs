import { Route } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { ViewerComponent } from './docs/components/viewer/viewer.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'docs', component: ViewerComponent }
];
