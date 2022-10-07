import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ProductModel } from "./product.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST,OPTIONS,DELETE,PUT",
  }),
};
@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrlService: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrlService = environment.api;
  }

  getAll(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(
      `${this.baseUrlService + "/product/getAll"}`,
      httpOptions
    );
  }
}
