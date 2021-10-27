import { InvoiceModel } from "./../invoice.model";
import { InvoiceService } from "./../invoice.service";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-invoice-list",
  templateUrl: "./invoice-list.component.html",
  styleUrls: ["./invoice-list.component.scss"],
})
export class InvoiceListComponent implements OnInit {
  title: string;
  displayedColumns: string[] = [
    "invoice_number",
    "serie",
    // "ncm_sh",
    // "cfop",
    // "qtd",
    "natureOfOperation",
    "unit",
    "freight",
    "value_unit",
    // "product",
    "client",
    "issueDate",
    "acoes",
  ];

  dataSource: InvoiceModel[];

  invoices: InvoiceModel[] = [];
  private endPoint: string;

  constructor(
    private service: InvoiceService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllInvoices();

    this.activatedRoute.data.subscribe((data) => {
      this.title = data.title;
      this.endPoint = data.endPoint;
    });
  }

  getAllInvoices() {
    this.service.getAll().subscribe((res) => {
      this.invoices = res;
      this.dataSource = res;
      console.log(res);
    });
  }

  edit(invoice_id: number): void {
    this.router.navigate(["/pages/invoice/edit/" + invoice_id]);
  }

  view(invoice_id: number): void {
    this.router.navigate(["/pages/invoice/view/" + invoice_id]);
  }

  goToNew() {
    this.router.navigate(["/pages/invoice/new"]);
  }
}
