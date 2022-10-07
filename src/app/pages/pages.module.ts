import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { Injector, NgModule } from "@angular/core";
import { NbMenuItem, NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { ProductInListComponent } from './stock/products_in/product-in-list/product-in-list.component';
import { ProductInItemComponent } from './stock/products_in/product-in-item/product-in-item.component';
import { SalesListComponent } from './stock/sales/sales-list/sales-list.component';
import { SalesItemComponent } from './stock/sales/sales-item/sales-item.component';
import { EmployeeListComponent } from './people-management/employees/employee-list/employee-list.component';
import { EmployeeItemComponent } from './people-management/employees/employee-item/employee-item.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    // MiscellaneousModule,
    // ModalsModule,
    // MainModule,
    // NgSelectModule,
  ],
  declarations: [PagesComponent, ProductInListComponent, ProductInItemComponent, SalesListComponent, SalesItemComponent, EmployeeListComponent, EmployeeItemComponent],
})
export class PagesModule {
  static injector: Injector;

  constructor(injector: Injector) {
    PagesModule.injector = injector;
  }
}
