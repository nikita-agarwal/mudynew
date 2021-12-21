import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaymentModalComponent, SalesComponent } from './sales/sales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { CustomerEditComponent, CustomersComponent } from './customers/customers.component';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent, InvoiceViewComponent, PaymentReminderModalComponent } from './invoices/invoices.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SalesComponent,
    CustomersComponent,
    InvoiceViewComponent,
    InventoryComponent,
    InvoicesComponent,
    PaymentModalComponent,
    PaymentReminderModalComponent,
    CustomerEditComponent
  ],
  imports: [
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxPrintModule
  ],
  entryComponents: [InvoiceViewComponent, PaymentModalComponent, PaymentReminderModalComponent, CustomerEditComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
