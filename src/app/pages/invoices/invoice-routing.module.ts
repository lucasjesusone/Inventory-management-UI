import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =
  [{
    path: 'list',
    component: InvoiceListComponent,
    data: { title: 'Lista de Notas Fiscais', endPoint: 'invoice' }
  },
  {
    path: 'new',
    component: InvoiceItemComponent,
    data: { title: 'Nova Nota Fiscal', endPoint: 'invoice' }
  },
  {
    path: 'view/:id',
    component: InvoiceItemComponent,
    data: { title: 'Visualizar Nota Fiscal', endPoint: 'invoice' }
  },
  {
    path: 'edit/:id',
    component: InvoiceItemComponent,
    data: { title: 'Editar Nota Fiscal', endPoint: 'invoice' }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule { }
export const invoiceRoutedModules = [
];