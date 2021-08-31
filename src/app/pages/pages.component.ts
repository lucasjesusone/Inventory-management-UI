import { Component } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: ` <router-outlet></router-outlet> `,
})
export class PagesComponent {
  menu: NbMenuItem[];

  constructor() {
    this.menu = [
       {
           title: 'Notas Fiscais',
           children: [
               {
                title: 'Notas Fiscais',
                link: '/pages/invoice/list'
               }
           ]
       }
    ];
  }
}
