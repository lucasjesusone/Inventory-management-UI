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
    "invoiceId",
    "invoiceNumber",
    "recipientCorporateName",
    "issuanceDate",
    // "remetenteIE",
    // "destinatarioIE",
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

  edit(invoiceId: number): void {
    this.router.navigate(["/pages/invoice/edit/" + invoiceId]);
  }

  view(invoiceId: number): void {
    this.router.navigate(["/pages/invoice/view/" + invoiceId]);
  }

  new() {
    this.router.navigate(["/pages/invoice/new"]);
  }
}
