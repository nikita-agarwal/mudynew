import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../customer.service';
import { InventoryService } from '../inventory.service';
import { Customer, Good, Invoice, Submersibles } from '../models/customer';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.less']
})
export class InvoicesComponent implements OnInit {

  public goods: Good[] = [];
  public customers: Customer[] = [];
  public invoices: Invoice[] = [];
  public customer: Customer = {
    name: '',
    _id: '',
    mobileNumber: '',
    stateCode: '',
    pan: '',
    gst: '',
    state: '',
    address: '',
    shippingAddress: '',
    brand: ''
  };
  date;
  public submersibles: Submersibles[] = [];
  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private inventoryService: InventoryService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getAllCustomers();
    this.getAllSubmersibles();
  }
  getAllSubmersibles() {
    this.inventoryService.getAllSubmersibles().subscribe(resp => {
      this.submersibles = resp;
    }, (err) => {
      this.snackBar.open(err, 'Error');
    });
  }
  addGoods() {
    this.goods.push({
      description: '',
      price: 0,
      qty: 0,
      hsnSac: '',
      serialNumber: '',
      code: ''
    });
  }
  removeGoods(index) {
    this.goods.splice(index, 1);
  }
  getAllCustomers() {
    this.customerService.getCustomers().subscribe(resp => {
      this.customers = resp;
    }, (err) => {
      this.snackBar.open(err, 'Error');
    });
  }

  fillDetails(id) {
    this.customers.forEach(element => {
      if (element._id === id) {
        this.customer = element;
      }
    });
  }

  createInvoice() {
    this.customerService.addInvoice(this.customer.name, this.customer._id, this.goods, this.date).subscribe(res => {
      let totalAmt = 0;
      res.goods.forEach(element => {
        totalAmt = totalAmt + (element.price * element.qty);
      });
      this.getAllCustomers();
      this.customer = {
        name: '',
        mobileNumber: '',
        stateCode: '',
        _id: '',
        pan: '',
        gst: '',
        state: '',
        address: '',
        shippingAddress: '',
        brand: ''
      };
      this.date = '';
      this.snackBar.open('Invoice Create', 'Success');
      this.goods.forEach(ele => {
        this.submersibles.forEach(item => {
          console.log(item.quantity, ele.qty, item._id, ele.description);
          if (item._id === ele.description) {
            ele.qty = item.quantity - ele.qty;
          }
          this.inventoryService.updateFinishGoods(ele.description, ele.qty).subscribe(resp => {
            this.goods = [];
          }, (error) => {
            this.snackBar.open(error, 'Error');
          });
        });
      });
    }, (err) => {
      this.snackBar.open(err, 'Error');
    });
  }

  getAllInvoices(tab) {
    if (tab.index === 1) {
      this.customerService.getInvoices().subscribe(resp => {
        this.invoices = resp;
      }, (err) => {
        this.snackBar.open(err, 'Error');
      });
    }
  }

  viewInvoice(id) {
    const dialogRef = this.dialog.open(InvoiceViewComponent, {
      width: '80vw',
      height: '80vh',
      data: { invoiceId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteInvoice(id) {
    this.customerService.deleteInvoice(id).subscribe(resp => {
      this.snackBar.open('Invoice Deleted', 'Success');
      this.customerService.getInvoices().subscribe(res => {
        this.invoices = res;
      }, (err) => {
        this.snackBar.open(err, 'Error');
      });
    }, (error) => {
      this.snackBar.open(error, 'Error');
    });
  }

  fillGoodsDetails(subId, good) {
    this.submersibles.forEach(ele => {
      if (ele._id === subId) {
        good.hsnSac = ele.hsnSac;
      }
      this.customer.subRates[this.customer.subRates.length - 1].forEach(element => {
        console.log(element.id, subId);
        if (element.id === subId) {
          good.price = element.rate;
        }
      });
    });
  }

}

@Component({
  selector: 'app-invoice-view',
  templateUrl: 'invoice-view.html',
  styleUrls: ['./invoices.component.less']
})
export class InvoiceViewComponent implements OnInit {
  public invoice: Invoice;
  public customer: Customer;
  public totalAmt = 0;
  public submersibles: Submersibles[] = [];
  constructor(
    public dialogRef: MatDialogRef<InvoiceViewComponent>,
    public customerService: CustomerService,
    public inventoryService: InventoryService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.getAllSubmersibles();
    this.customerService.getInvoiceById(this.data.invoiceId).subscribe(resp => {
      this.invoice = resp[0];
      this.invoice.goods.forEach(element => {
        this.submersibles.forEach(sub => {
          if (element.description === sub._id) {
            element.description = sub.description;
            element.code = sub.code;
          }
        });
        this.totalAmt = this.totalAmt + (element.price * element.qty);
      });
      this.customerService.getCustomerById(this.invoice.customer).subscribe(res => {
        this.customer = res[0];
        console.log(this.customer);
        const dialogRef = this.dialog.open(PaymentReminderModalComponent, {
          width: '50vw',
          height: '50vh',
          data: { id: this.customer._id }
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      });
    }, error => {
      this.snackBar.open(error, 'Error');
    });
  }
  getAllSubmersibles() {
    this.inventoryService.getAllSubmersibles().subscribe(resp => {
      this.submersibles = resp;
    }, (err) => {
      this.snackBar.open(err, 'Error');
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  printToPdf() {

  }
}

@Component({
  selector: 'app-payment-reminder-view',
  templateUrl: 'payment-reminder-view.html',
  styleUrls: ['./invoices.component.less']
})
export class PaymentReminderModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PaymentReminderModalComponent>,
    public customerService: CustomerService,
    public inventoryService: InventoryService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data.totalBalance = 0;
    this.data.totalRecieved = 0;
    this.inventoryService.getPaymentsByCustomerId(this.data.id).subscribe(resp => {
      this.data.payments = resp;
      this.data.payments.forEach(element => {
        this.data.totalRecieved = this.data.totalRecieved + element.ammount;
      });
    });
    this.inventoryService.getInvoicesByCustomerId(this.data.id).subscribe((resp: any[]) => {
      this.data.bills = resp;
      this.data.subs = [];
      this.data.bills.forEach(element => {
        element.ammount = 0;
        element.goods.forEach(item => {
          this.data.subs.push(item);
          element.ammount = element.ammount + (item.qty * item.price);
          this.data.totalBalance = this.data.totalBalance + (item.qty * item.price);
        });
      });
    });
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
