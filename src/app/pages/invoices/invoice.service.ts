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


  getById(){

  }

  getAll(): Observable<InvoiceModel[]> {
    return this.httpClient.get<InvoiceModel[]>(`${this.baseUrlService + '/invoice/getAll'}`, httpOptions);
  }

  create(){

  }

  edit() {

  }
}
