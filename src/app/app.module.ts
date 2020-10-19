import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule} from 'ngx-markdown';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { HomeComponent } from './core/components/home/home.component';
import { ViewerComponent } from './docs/components/viewer/viewer.component';
import { NavComponent } from './docs/components/nav/nav.component';
import { ShellComponent } from './docs/components/shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewerComponent,
    NavComponent,
    ShellComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
