import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by"
      >Copyright © Lucas 2021 - Todos os direitos reservados
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
