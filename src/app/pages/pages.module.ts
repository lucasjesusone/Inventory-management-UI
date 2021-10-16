import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { Injector, NgModule } from "@angular/core";
import { NbMenuItem, NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";

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
  declarations: [PagesComponent],
})
export class PagesModule {
  static injector: Injector;

  constructor(injector: Injector) {
    PagesModule.injector = injector;
  }
}
