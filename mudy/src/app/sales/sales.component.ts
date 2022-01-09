import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../customer.service';
import { InventoryService } from '../inventory.service';
import { Customer, Good, Payment, Submersibles } from '../models/customer';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.less']
})
export class SalesComponent implements OnInit {
  public customers: Customer[] = [];
  public payment: Payment = {
    customerId: '',
    date: new Date(),
    ammount: 0,
    mode: ''
  };
  public submersibles: Submersibles[] = [];
  public goods: Good[] = [];
  public customer: Customer;
  public numberOfChange: number;
  public numbers;
  public month;
  public months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  constructor(
    public customerService: CustomerService,
    public inventoryService: InventoryService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getAllCustomers();
    this.getAllSubmersibles();
    this.getMaxRateChanges();
  }
  fillDetails(id) {
    this.customers.forEach(element => {
      if (element._id === id) {
        this.customer = element;
      }
    });
  }
  filterTableData() {
    console.log(this.month);
  }
  getMaxRateChanges() {
    this.inventoryService.getMaxRateChange().subscribe(resp => {
      this.numberOfChange = resp[0].number;
      // this.numbers = Array(this.numberOfChange).fill(0).map((x, i) => i);
      this.numbers = [0]
      console.log(this.numbers.slice().reverse(), this.numberOfChange, 'num');
    }, (err) => {
      this.snackBar.open(err, 'Error');
    });
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
  getAllPayments(tab) {
    if (tab.index === 1) {
      this.customers.forEach(customer => {
        customer.totalBalance = 0;
        customer.totalRecieved = 0;
        this.inventoryService.getInvoicesByCustomerId(customer._id).subscribe(resp => {
          customer.bills = resp;
          customer.subs = [];
          customer.bills.forEach(element => {
            element.ammount = 0;
            element.goods.forEach(item => {
              customer.subs.push(item);
              element.ammount = element.ammount + (item.qty * item.price);
              customer.totalBalance = customer.totalBalance + (item.qty * item.price);
            });
            console.log(customer);
          });
          customer.subs.forEach(it => {
            customer.subRates[0].forEach(ele => {
              if (ele.id === it.description) {
                ele.items = ele.items ? (ele.items + it.qty) : it.qty;
              }
            });
          });
        }, (err) => {
          this.snackBar.open(err, 'Error');
        });
        this.inventoryService.getPaymentsByCustomerId(customer._id).subscribe(resp => {
          customer.payments = resp;
          customer.payments.forEach(element => {
            customer.totalRecieved = customer.totalRecieved + element.ammount;
          });
        }, (err) => {
          this.snackBar.open(err, 'Error');
        });
      });
    }
  }
  getAllCustomers() {
    this.customerService.getCustomers().subscribe(resp => {
      this.customers = resp;
    }, (err) => {
      this.snackBar.open(err, 'Error');
    });
  }
  addPayment() {
    this.inventoryService.addPayment(this.payment).subscribe(resp => {
      this.snackBar.open('Payment Added Success', 'Success');
      this.payment = {
        customerId: '',
        date: new Date(),
        ammount: 0,
        mode: ''
      };
    }, err => {
      this.snackBar.open(err, 'Error');
    });
  }
  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('sales-table'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'sales.xlsx');
  }

  openPaymnetModal(data) {
    if (data.mode === 'cheque') {
      const dialogRef = this.dialog.open(PaymentModalComponent, {
        width: '50vw',
        data: { pay: data }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        if (result === 'success') {
          window.location.reload();
        }
      });
    }
  }
}
@Component({
  selector: 'app-payment-modal',
  templateUrl: 'payment-modal.html',
  styleUrls: ['./sales.component.less']
})
export class PaymentModalComponent implements OnInit {
  public customer: Customer;
  constructor(
    public dialogRef: MatDialogRef<PaymentModalComponent>,
    public customerService: CustomerService,
    public inventoryService: InventoryService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.customerService.getCustomerById(this.data.pay.customerId).subscribe(res => {
      this.customer = res[0];
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  updatePaymentStatus() {
    this.inventoryService.getPaymentsByCustomerId(this.data.pay.customerId).subscribe(res => {
      console.log(res);
      res.forEach(element => {
        if (element._id === this.data.pay._id) {
          this.inventoryService.updatePayment(element._id).subscribe(resp => {
            this.snackBar.open(resp.msg, 'Success');
            this.dialogRef.close('success');
          }, err => {
            this.snackBar.open(err, 'Error');
          });
        }
      });
    });
  }
}
