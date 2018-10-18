import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullnessPipe } from './fullness.pipe';


import { AppComponent } from './app.component';
import { TapListComponent } from './tap-list/tap-list.component';
import { EditTapComponent } from './edit-tap/edit-tap.component';
import { FormsModule }  from '@angular/forms';
import { SellTapComponent } from './sell-tap/sell-tap.component';
import { AddTapComponent } from './add-tap/add-tap.component';

@NgModule({
  declarations: [
    AppComponent,
    TapListComponent,
    EditTapComponent,
    SellTapComponent,
    AddTapComponent,
    FullnessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
