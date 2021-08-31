import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { Injector, NgModule } from "@angular/core";
import { NbMenuItem, NbMenuModule } from "@nebular/theme";
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  imports: [PagesRoutingModule, NbMenuModule],
  declarations: [PagesComponent, ProductsComponent, ClientsComponent],
})
export class PagesModule {
  static injector: Injector;

  constructor(injector: Injector) {
    PagesModule.injector = injector;
  }
}
