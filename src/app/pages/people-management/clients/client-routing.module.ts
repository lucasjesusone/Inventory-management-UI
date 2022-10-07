
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientItemComponent } from './client-item/client-item.component';


const routes: Routes =
  [{
    path: 'list',
    component: ClientListComponent,
    data: { title: 'Lista de Clientes', endPoint: 'client' }
  },
  {
    path: 'new',
    component: ClientItemComponent,
    data: { title: 'Nova Cliente', endPoint: 'client' }
  },
  {
    path: 'view/:id',
    component: ClientItemComponent,
    data: { title: 'Visualizar Cliente', endPoint: 'client' }
  },
  {
    path: 'edit/:id',
    component: ClientItemComponent,
    data: { title: 'Editar Cliente', endPoint: 'client' }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
    static components = [
        ClientListComponent,
        ClientItemComponent
    ]
};