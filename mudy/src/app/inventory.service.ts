import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(public http: HttpClient) { }

  addPart(inventory) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>('http://localhost:3000/api/part', inventory, { headers: headers1 })
      .map(res => res);
  }

  getAllParts() {
    return this.http.get<any>('http://localhost:3000/api/parts')
      .map(res => res);
  }

  getAllSubmersibles() {
    return this.http.get<any>('http://localhost:3000/api/submersibles')
      .map(res => res);
  }

  getMaxRateChange() {
    return this.http.get<any>('http://localhost:3000/api/maxRateChange')
      .map(res => res);
  }

  getSubmersibleById(id) {
    return this.http.get<any>('http://localhost:3000/api/submersible/' + id)
      .map(res => res);
  }

  addSubmersibleQuantity(id, qty) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>('http://localhost:3000/api/updateSubmersible/' + id, { quantity: qty }, { headers: headers1 })
      .map(res => res);
  }

  getPartById(id) {
    return this.http.get<any>('http://localhost:3000/api/stock/' + id)
      .map(res => res);
  }

  updateStockQty(id, qty) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>('http://localhost:3000/api/updateStock/' + id, { quantity: qty }, { headers: headers1 })
      .map(res => res);
  }

  updateFinishGoods(id, qty) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>('http://localhost:3000/api/updateFinishGoods/' + id, { quantity: qty }
      , { headers: headers1 })
      .map(res => res);
  }

  addPayment(payment) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>('http://localhost:3000/api/payment/', payment, { headers: headers1 })
      .map(res => res);
  }

  getAllPayments() {
    return this.http.get<any>('http://localhost:3000/api/payments')
      .map(res => res);
  }

  getPaymentsByCustomerId(customerId) {
    return this.http.get<any>('http://localhost:3000/api/paymentByCustomer/' + customerId)
      .map(res => res);
  }

  updatePayment(id) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>('http://localhost:3000/api/updatePayment/' + id, { headers: headers1 })
      .map(res => res);
  }

  getInvoicesByCustomerId(customerId) {
    return this.http.get<any>('http://localhost:3000/api/invoiceByCustomer/' + customerId)
      .map(res => res);
  }

}
