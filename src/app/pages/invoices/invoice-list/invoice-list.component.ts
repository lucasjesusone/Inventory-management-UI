import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-invoice-list",
  templateUrl: "./invoice-list.component.html",
  styleUrls: ["./invoice-list.component.scss"],
})
export class InvoiceListComponent implements OnInit {
  displayedColumns: string[] = [
    "invoiceNumber",
    "serie",
    "ncm_sh",
    "cfop",
    "qtd",
    "natureOfOperation",
    "unit",
    "freight",
    "value_unit",
    "product",
    "client",
  ];

  constructor() {}

  ngOnInit() {}
}
