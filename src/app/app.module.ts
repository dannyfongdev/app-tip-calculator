import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PerPersonCardComponent } from './per-person-card/per-person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PerPersonCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
