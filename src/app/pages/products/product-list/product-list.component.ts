import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../product.model";
import { ActivatedRoute } from "@angular/router";
import { NbIconLibraries } from "@nebular/theme";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  title?: string;
  displayedColumns: string[] = [
    "product_id",
    "product_name",
    "createdAt",
    "acoes",
  ];

  dataSource: ProductModel[];

  products: ProductModel[] = [];

  constructor(
    public iconsLibrary: NbIconLibraries,
    private service: ProductService,
    private activatedRoute?: ActivatedRoute
  ) {
    iconsLibrary.registerFontPack("fas", {
      packClass: "fas",
      iconClassPrefix: "fa",
    });

    iconsLibrary.registerFontPack("far", {
      packClass: "far",
      iconClassPrefix: "fa",
    });
  }

  ngOnInit(): void {
    this.getAllInvoices();

    this.activatedRoute.data.subscribe((data) => {
      this.title = data.title;
    });
  }

  getAllInvoices() {
    this.service.getAll().subscribe((res) => {
      this.dataSource = res;
      this.products = res;
      console.log(res);
    });
  }
}
