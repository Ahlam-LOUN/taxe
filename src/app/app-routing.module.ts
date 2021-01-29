import { TaxeComponent } from './components/taxe/taxe.component';
import { ListTaxesComponent } from './components/list-taxes/list-taxes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/taxes", pathMatch: "full" },
  { path:"taxes", component: ListTaxesComponent },
  { path:"addTaxe", component: TaxeComponent }
]

@NgModule({
 
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
