import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  

  createForm() {
    this.form = this.fb.group({
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
}
