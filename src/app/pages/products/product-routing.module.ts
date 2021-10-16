import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =
  [{
    path: 'list',
    component: ProductListComponent,
    data: { title: 'Lista de Notas Fiscais', endPoint: 'product' }
  },
  {
    path: 'new',
    component: ProductItemComponent,
    data: { title: 'Novo Produto', endPoint: 'product' }
  },
  {
    path: 'view/:id',
    component: ProductItemComponent,
    data: { title: 'Visualizar Produto', endPoint: 'product' }
  },
  {
    path: 'edit/:id',
    component: ProductItemComponent,
    data: { title: 'Editar Produto', endPoint: 'product' }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {
    static components = [
        ProductListComponent,
        ProductItemComponent
    ]
};