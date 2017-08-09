import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircleLiveMenuButtonComponent } from '../../src/app/circle-live-menu-button/circle-live-menu-button.component';
import { TableShowComponent } from '../../src/app/table-show/table-show.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleLiveMenuButtonComponent,
    TableShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
