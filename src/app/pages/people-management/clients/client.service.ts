import { ClientModel } from "./client.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

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
export class ClientService {
  baseUrlService: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrlService = environment.api;
  }

  getAll(): Observable<ClientModel[]> {
    return this.httpClient.get<ClientModel[]>(
      `${this.baseUrlService + "/client/getAll"}`,
      httpOptions
    );
  }
}
