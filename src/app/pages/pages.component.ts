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
        title: "Login",
        children: [
          {
            title: "Usuários",
            link: "/pages/user/list",
          },
          {
            title: "Clientes",
            link: "/pages/client/list",
          },
          {
            title: "Funcionários",
            link: "/pages/client/list",
          },
        ],
      },
      {
        title: "Notas Fiscais",
        children: [
          {
            title: "Nota Fiscal Eletrônica",
            link: "/pages/invoice/list",
          },
          {
            title: "Nota Fiscal de Serviço",
            link: "/pages/product/list",
          },
        ],
      },
      {
        title: "Controle",
        children: [
          {
            title: "Controle de Despesas",
            link: "/pages/product/list"
          },
          {
            title: "Controle de Contas a Pagar",
            link: "/pages/product/list"
          },
          {
            title: "Controle de Cheques",
            link: "/pages/product/list"
          }
        ]
      },
      {
        title: "Estoque",
        children: [
          {
            title: "Produtos",
            link: "/pages/product/list"
          },
          {
            title: "Vendas / Orçamentos",
            link: "/pages/product/list"
          },
        ]
      }
    ];
  }
}
