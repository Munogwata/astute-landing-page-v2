import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponentsComponent } from './navigation-components/navigation-components.component';
import { UpdateBarComponent } from './navigation-components/update-bar/update-bar.component';
import { FundingStatusComponent } from './navigation-components/funding-status/funding-status.component';
import { MenuBarComponent } from './navigation-components/menu-bar/menu-bar.component';
import { FooterComponent } from './navigation-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponentsComponent,
    UpdateBarComponent,
    FundingStatusComponent,
    MenuBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
