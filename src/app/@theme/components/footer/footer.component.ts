import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by"
      >Copyright © Turin Gestão Empresarial 2022 - All Rights Reserved
    </span>
    <div>Versão: {{ version }}</div>
  `,
})
export class FooterComponent implements OnInit {
  version: any;
  constructor() {}

  ngOnInit(): void {
    this.version = environment.version;
  }
}
