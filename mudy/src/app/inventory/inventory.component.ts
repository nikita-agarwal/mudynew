import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { InventoryService } from '../inventory.service';
import { Part, Stock, Submersibles } from '../models/customer';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.less']
})
export class InventoryComponent implements OnInit {
  public part: Part = {
    type: '',
    name: '',
    number: '',
    material: '',
    description: '',
    moc: 0,
    _id: '',
    quantity: 0,
    allowedSubType: ['1.0/8', '1.0/10', '1.5/12', '1.5/15', '2.0/12', '2.0/15', '2.0/18']
  };
  public stocks: Stock[] = [{
    id: '',
    moc: 0,
    quantity: 0
  }];
  public items: Stock[] = [{
    id: '',
    moc: 0,
    quantity: 0
  }];
  public inventories: Part[] = [];
  public submersibles: Submersibles[] = [];
  constructor(public inventoryService: InventoryService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllParts(0);
    this.getAllSubmersibles();
  }
  getAllParts(tab) {
    if (tab.index === 4) {
      this.inventoryService.getAllSubmersibles().subscribe(res => {
        this.submersibles = res;
      }, err => {
        this.snackBar.open(err, 'Error');
      });
    } else {
      this.inventoryService.getAllParts().subscribe(resp => {
        this.inventories = resp;
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
  addStocks() {
    this.stocks.push({
      id: '',
      moc: 0,
      quantity: 0
    });
  }
  removeStocks(index) {
    this.stocks.splice(index, 1);
  }
  purchaseStocks() {
    this.stocks.forEach(element => {
      this.inventoryService.getPartById(element.id).subscribe(resp => {
        let newQty;
        if (resp[0].quantity > 0) {
          console.log(typeof (resp[0].quantity), typeof (element.quantity), resp[0].quantity, element.quantity);
          newQty = resp[0].quantity + element.quantity;
          this.inventoryService.updateStockQty(element.id, newQty).subscribe(res => {
            this.stocks = [{
              id: '',
              moc: 0,
              quantity: 0
            }];
          }, (err) => {
            this.snackBar.open(err, 'Error');
          });
        } else {
          newQty = element.quantity;
          this.inventoryService.updateStockQty(element.id, newQty).subscribe(res => {
            this.stocks = [{
              id: '',
              moc: 0,
              quantity: 0
            }];
          }, (err) => {
            this.snackBar.open(err, 'Error');
          });
        }
      }, (error) => {
        this.snackBar.open(error, 'Error');
      });
    });
  }
  addItems() {
    this.items.push({
      id: '',
      moc: 0,
      quantity: 0
    });
  }
  removeItems(index) {
    this.items.splice(index, 1);
  }

  addFinishGoods() {
    this.getAllParts(0);
    this.items.forEach(element => {
      this.inventories.forEach(part => {
        if (part.allowedSubType.indexOf(element.id) !== -1) {
          this.inventoryService.getPartById(part._id).subscribe(resp => {
            const newQty = resp[0].quantity - (part.moc * element.quantity);
            this.inventoryService.updateStockQty(part._id, newQty).subscribe(res => {
              this.items = [{
                id: '',
                moc: 0,
                quantity: 0
              }];
            }, (err) => {
              this.snackBar.open(err, 'Error');
            });
          });
        }
      });
      this.inventoryService.getSubmersibleById(element.id).subscribe(resp => {
        let newQty;
        if (resp[0].quantity > 0) {
          console.log(typeof (resp[0].quantity), typeof (element.quantity), resp[0].quantity, element.quantity);
          newQty = resp[0].quantity + element.quantity;
          this.inventoryService.addSubmersibleQuantity(element.id, newQty).subscribe(res => {
            this.items = [{
              id: '',
              moc: 0,
              quantity: 0
            }];
          }, (err) => {
            this.snackBar.open(err, 'Error');
          });
        } else {
          newQty = element.quantity;
          this.inventoryService.addSubmersibleQuantity(element.id, newQty).subscribe(res => {
            this.items = [{
              id: '',
              moc: 0,
              quantity: 0
            }];
          }, (err) => {
            this.snackBar.open(err, 'Error');
          });
        }
      }, (error) => {
        this.snackBar.open(error, 'Error');
      });
    });
  }

  createPart() {
    this.inventoryService.addPart(this.part).subscribe(resp => {
      this.part = {
        type: '',
        name: '',
        number: '',
        material: '',
        description: '',
        moc: 0,
        _id: '',
        quantity: 0,
        allowedSubType: ['1.0/8', '1.0/10', '1.5/12', '1.5/15', '2.0/12', '2.0/15', '2.0/18']
      };
      this.snackBar.open('Part Create', 'Success');
    }, (error) => {
      this.snackBar.open(error, 'Error');
    });
  }

  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('inventory-table'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'inventory.xlsx');
  }
}
