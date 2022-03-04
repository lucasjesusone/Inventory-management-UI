import { environment } from './../../../environments/environment';
import { InvoiceModel } from './invoice.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST,OPTIONS,DELETE,PUT',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseUrlService: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrlService = environment.api
   }


  getAll(): Observable<InvoiceModel[]> {
    return this.httpClient.get<InvoiceModel[]>(`${this.baseUrlService + '/invoice/getAll'}`, httpOptions);
  }

  view(invoiceId: number): Observable<InvoiceModel> {
    return this.httpClient.get<InvoiceModel>(this.baseUrlService + invoiceId)
  }


  delete(invoiceId: number): Observable<void>{
    return this.httpClient.delete<void>(this.baseUrlService + invoiceId)
  }


  edit(invoice: InvoiceModel): Observable<InvoiceModel> {
    return this.httpClient.put<InvoiceModel>(this.baseUrlService + invoice.invoiceId, invoice)
  }
}
