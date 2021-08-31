import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { Injector, NgModule } from "@angular/core";
import { NbMenuItem, NbMenuModule } from "@nebular/theme";

@NgModule({
  imports: [PagesRoutingModule, NbMenuModule],
  declarations: [PagesComponent],
})
export class PagesModule {
  static injector: Injector;

  constructor(injector: Injector) {
    PagesModule.injector = injector;
  }
}
