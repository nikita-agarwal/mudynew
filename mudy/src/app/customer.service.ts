import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customer = {

  };
  constructor(private http: HttpClient) { }
  getCustomers() {
    return this.http.get<any>(environment.apiUrl+'/api/customers')
      .map(res => res);
  }
  getAllStates() {
    return this.http.get<any>(environment.apiUrl+'/api/states')
      .map(res => res);
  }
  addCustomer(newCustomer) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(environment.apiUrl+'/api/customer', newCustomer, { headers: headers1 })
      .map(res => res);
  }
  updateCustomer(id, sub) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(environment.apiUrl+'/api/updateCustomer/' + id, { subRates: sub }, { headers: headers1 })
      .map(res => res);
  }

  updateMaxRateChanges(id, num) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(environment.apiUrl+'/api/updateMaxRateChanges/' + id, { number: num }, { headers: headers1 })
      .map(res => res);
  }
  deleteCustomer(id) {
    return this.http.delete<any>(environment.apiUrl+'/api/customer/' + id)
      .map(res => res);
  }
  getCustomerById(id) {
    return this.http.get<any>(environment.apiUrl+'/api/customer/' + id)
      .map(res => res);
  }
  getInvoices() {
    return this.http.get<any>(environment.apiUrl+'/api/invoices')
      .map(res => res);
  }
  getInvoiceById(id) {
    return this.http.get<any>(environment.apiUrl+'/api/invoice/' + id)
      .map(res => res);
  }
  addInvoice(name, customerId, items, invoiceDate) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/javascript');
    headers1.append('Access-Control-Allow-Origin', '*');
    const filename = name + '-' + invoiceDate;
    return this.http.post<any>(environment.apiUrl+'/api/invoice',
      { name: filename, id: customerId, goods: items, date: invoiceDate }, { headers: headers1 })
      .map(res => res);
  }

  deleteInvoice(id) {
    return this.http.delete<any>(environment.apiUrl+'/api/invoice/' + id)
      .map(res => res);
  }
}
