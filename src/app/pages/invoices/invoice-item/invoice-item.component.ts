import { unitType, Freight } from "./../../../shared/enums/enum";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-invoice-item",
  templateUrl: "./invoice-item.component.html",
  styleUrls: ["./invoice-item.component.scss"],
})
export class InvoiceItemComponent implements OnInit {
  form: FormGroup;
  unitType = unitType;
  freight = Freight;
  invoiceId: number
  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.invoiceId = this.activatedRoute.snapshot.params["invoiceId"];
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      serie: [null],
      ncm_sh: [null],
      product_code: [null],
      issueDate: [null],
      invoice_number: [null],
      cst: [null],
      cfop: [null],
      qtd: [null],
      natureOfOperation: [null],
      unit: [],
      freight: [null],
      value_unit: [null],
      product: [null],
      client: [null],
    });
  }


  returnToList() {
    this.router.navigate(['/pages/invoice/list'])
  }
}
