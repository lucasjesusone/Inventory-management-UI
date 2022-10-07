import { ProductService } from "../product.service";
import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { NbIconLibraries } from "@nebular/theme";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  title?: string;
  displayedColumns: string[] = [
    "productCode",
    "productDescription",
    "quantity",
    "unitaryValue",
    "acoes",
  ];

  dataSource: ProductModel[];

  products: ProductModel[] = [];

  constructor(
    public iconsLibrary: NbIconLibraries,
    private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
    this.getAllProducts();

    this.activatedRoute.data.subscribe((data) => {
      this.title = data.title;
    });
  }

  getAllProducts() {
    this.service.getAll().subscribe((res) => {
      this.dataSource = res;
      this.products = res;
    });
  }

  newProduct() {
    this.router.navigate(["/pages/product/new"]);
  }
}
