import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PersonelBankingComponent } from './personel-banking/personel-banking.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { ImportantinfoComponent } from './importantinfo/importantinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PersonelBankingComponent,
    HeaderpageComponent,
    ImportantinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
