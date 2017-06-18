import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { ItemComponent } from './item/item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SearchItemComponent,
    ItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
