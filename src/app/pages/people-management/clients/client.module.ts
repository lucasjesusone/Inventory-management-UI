import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import {
  NbButtonModule,
  NbTooltipModule,
  NbIconModule,
  NbCardModule,
} from "@nebular/theme";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClientRoutingModule } from "./client-routing.module";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    ClientRoutingModule,
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
    NbCardModule,
  ],
  declarations: [ClientRoutingModule.components],
})
export class ClientModule {}
