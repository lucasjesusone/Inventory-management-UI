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
          import("./stock/products/product.module").then((m) => m.ProductModule),
      },
      {
        path: "user",
        loadChildren: () =>
          import("./people-management/users/user.module").then((m) => m.UserModule),
      },
      {
        path: "client",
        loadChildren: () =>
          import("./people-management/clients/client.module").then((m) => m.ClientModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
