import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PerPersonCardComponent } from './per-person-card/per-person-card.component';
import { SelectTipComponent } from './select-tip/select-tip.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    PerPersonCardComponent,
    SelectTipComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
