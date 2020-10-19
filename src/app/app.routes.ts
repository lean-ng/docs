import { Route } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { ShellComponent } from './docs/components/shell/shell.component';

import { TocResolverService } from './docs/toc-resolver.service';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'docs',
    resolve: {
      toc: TocResolverService
    },
    children: [
      { path: '**', component: ShellComponent }
    ]
  }
];
