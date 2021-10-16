import { PagesComponent } from "./pages.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "invoice",
        loadChildren: () =>
          import("./invoices/invoice.module").then((m) => m.InvoiceModule),
      },
      {
        path: "product",
        loadChildren: () =>
          import("./products/product.module").then((m) => m.ProductModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
