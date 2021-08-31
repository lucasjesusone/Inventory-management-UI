import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { InvoiceRoutingModule } from "./invoice-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbIconModule } from "@nebular/theme";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    InvoiceRoutingModule,
    NbIconModule,
  ],
  declarations: [InvoiceRoutingModule.components],
})
export class InvoiceModule {}
