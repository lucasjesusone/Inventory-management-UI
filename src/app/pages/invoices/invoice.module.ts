import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { InvoiceRoutingModule } from "./invoice-routing.module";
import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { NbButtonModule, NbCardModule, NbIconModule, NbTooltipModule } from "@nebular/theme";
import { MatCardModule } from "@angular/material/card";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    InvoiceRoutingModule,
    NbButtonModule,
    NbTooltipModule,
    NbIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    NbCardModule
  ],
  declarations: [InvoiceRoutingModule.components],
  providers:[
    {
      provide: LOCALE_ID, useValue: "pt-BR"
    }
  ]
})
export class InvoiceModule {}
