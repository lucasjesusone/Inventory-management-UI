import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  form: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }


  createForm() {
    this.form = this.formBuilder.group({
      
    })
  }

}
