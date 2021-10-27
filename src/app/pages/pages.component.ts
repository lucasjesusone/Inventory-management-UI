import { Component } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu: NbMenuItem[];

  constructor() {
    this.menu = [
      { 
        title: "Serviços",
        children: [
          {
            title: "Notas Fiscais",
            link: "/pages/invoice/list",
          },
          {
            title: "Produtos",
            link: "/pages/product/list",
          },
          {
            title: "Usuários",
            link: "/pages/user/list",
          },
          {
            title: "Clientes",
            link: "/pages/client/list",
          },
        ],
      },
    ];
  }
}
