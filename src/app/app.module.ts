import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TapListComponent } from './tap-list/tap-list.component';
import { EditTapComponent } from './edit-tap/edit-tap.component';


@NgModule({
  declarations: [
    AppComponent,
    TapListComponent,
    EditTapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
