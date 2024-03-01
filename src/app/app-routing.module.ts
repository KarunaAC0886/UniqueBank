import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PersonelBankingComponent } from './personel-banking/personel-banking.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'personel',component:PersonelBankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
