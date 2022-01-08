import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(public http: HttpClient) { }

  addPart(inventory) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(environment.apiUrl+'/api/part', inventory, { headers: headers1 })
      .map(res => res);
  }

  getAllParts() {
    return this.http.get<any>(environment.apiUrl+'/api/parts')
      .map(res => res);
  }

  getAllSubmersibles() {
    return this.http.get<any>(environment.apiUrl+'/api/submersibles')
      .map(res => res);
  }

  getMaxRateChange() {
    return this.http.get<any>(environment.apiUrl+'/api/maxRateChange')
      .map(res => res);
  }

  getSubmersibleById(id) {
    return this.http.get<any>(environment.apiUrl+'/api/submersible/' + id)
      .map(res => res);
  }

  addSubmersibleQuantity(id, qty) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(environment.apiUrl+'/api/updateSubmersible/' + id, { quantity: qty }, { headers: headers1 })
      .map(res => res);
  }

  getPartById(id) {
    return this.http.get<any>(environment.apiUrl+'/api/stock/' + id)
      .map(res => res);
  }

  updateStockQty(id, qty) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(environment.apiUrl+'/api/updateStock/' + id, { quantity: qty }, { headers: headers1 })
      .map(res => res);
  }

  updateFinishGoods(id, qty) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(environment.apiUrl+'/api/updateFinishGoods/' + id, { quantity: qty }
      , { headers: headers1 })
      .map(res => res);
  }

  addPayment(payment) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(environment.apiUrl+'/api/payment/', payment, { headers: headers1 })
      .map(res => res);
  }

  getAllPayments() {
    return this.http.get<any>(environment.apiUrl+'/api/payments')
      .map(res => res);
  }

  getPaymentsByCustomerId(customerId) {
    return this.http.get<any>(environment.apiUrl+'/api/paymentByCustomer/' + customerId)
      .map(res => res);
  }

  updatePayment(id) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(environment.apiUrl+'/api/updatePayment/' + id, { headers: headers1 })
      .map(res => res);
  }

  getInvoicesByCustomerId(customerId) {
    return this.http.get<any>(environment.apiUrl+'/api/invoiceByCustomer/' + customerId)
      .map(res => res);
  }

}
