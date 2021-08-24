import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatPaginatorModule } from "@angular/material";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbModule, MatTableModule, MatPaginatorModule],
})
export class InvoiceModule {}
