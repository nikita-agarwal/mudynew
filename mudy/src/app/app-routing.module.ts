import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
