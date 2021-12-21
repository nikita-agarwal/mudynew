import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../customer.service';
import { InventoryService } from '../inventory.service';
import { Customer, Submersibles } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {
  public customer: Customer = {
    name: '',
    mobileNumber: '',
    pan: '',
    gst: '',
    state: '',
    stateCode: '',
    address: '',
    shippingAddress: '',
    brand: '',
    subRates: []
  };
  public states = [];
  public customers: Customer[] = [];
  public submersibles: Submersibles[] = [];
  constructor(
    private customerService: CustomerService,
    private inventoryService: InventoryService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllStates();
    this.getAllSubmersibles();
  }

  getAllStates() {
    this.customerService.getAllStates().subscribe(resp => {
      this.states = resp;
    }, err => {
      this.snackBar.open(err, 'Error');
    });
  }
  setStateCode(val) {
    this.states.forEach(element => {
      if (element.state === val) {
        this.customer.stateCode = element.stateCode;
      }
    });
  }
  getAllCustomers(tab) {
    if (tab.index === 1) {
      this.customerService.getCustomers().subscribe(resp => {
        this.customers = resp;
      }, (err) => {
        this.snackBar.open(err, 'Error');
      });
    }
  }
  getAllSubmersibles() {
    this.inventoryService.getAllSubmersibles().subscribe(resp => {
      this.submersibles = resp;
    }, (err) => {
      this.snackBar.open(err, 'Error');
    });
  }
  addCustomer() {
    const rates = [];
    this.submersibles.forEach(element => {
      rates.push({
        name: element.name,
        id: element._id,
        rate: element.rate,
        description: element.description
      });
    });
    this.customer.subRates[0] = rates;
    this.customerService.addCustomer(this.customer).subscribe(resp => {
      this.customer = {
        name: '',
        mobileNumber: '',
        pan: '',
        gst: '',
        state: '',
        stateCode: '',
        address: '',
        shippingAddress: '',
        brand: '',
        subRates: []
      };
      this.snackBar.open('Customer Create', 'Success');
    }, (error) => {
      this.snackBar.open(error, 'Error');
    });
  }
  editCustomer(val) {
    const dialogRef = this.dialog.open(CustomerEditComponent, {
      width: '50vw',
      height: '70vh',
      data: { customer: val }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteCustomer(id) {
    this.customerService.deleteCustomer(id).subscribe(resp => {
      this.snackBar.open('Customer Deleted', 'Success');
      this.customerService.getCustomers().subscribe(res => {
        this.customers = res;
      }, (err) => {
        this.snackBar.open(err, 'Error');
      });
    }, (error) => {
      this.snackBar.open(error, 'Error');
    });
  }
}



@Component({
  selector: 'app-customer-edit',
  templateUrl: 'customer-edit.html',
  styleUrls: ['./customers.component.less']
})
export class CustomerEditComponent implements OnInit {
  public submersibles: Submersibles[] = [];
  public customer: Customer;
  constructor(
    public dialogRef: MatDialogRef<CustomerEditComponent>,
    public customerService: CustomerService,
    public inventoryService: InventoryService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.customer = this.data.customer;
    this.getAllSubmersibles();
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

  updateCustomer() {
    const rates = [];
    this.submersibles.forEach(element => {
      rates.push({
        name: element.name,
        id: element._id,
        rate: element.rate,
        description: element.description
      });
    });
    this.customer.subRates.push(rates);
    this.customerService.updateCustomer(this.customer._id, this.customer.subRates).subscribe(resp => {
      this.inventoryService.getMaxRateChange().subscribe(res => {
        const num = res[0].number + 1;
        this.customerService.updateMaxRateChanges(res[0]._id, num).subscribe(response => {
          this.snackBar.open('Updated Succesfully', 'Success');
          this.dialogRef.close();
        });
      });
    }, (err) => {
      this.snackBar.open(err, 'Error');
    });
  }
}
