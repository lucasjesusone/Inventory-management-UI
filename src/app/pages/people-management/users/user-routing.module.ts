import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =
  [{
    path: 'list',
    component: UserListComponent,
    data: { title: 'Lista de Usuários', endPoint: 'user' }
  },
  {
    path: 'new',
    component: UserItemComponent,
    data: { title: 'Novo Usuário', endPoint: 'user' }
  },
  {
    path: 'view/:id',
    component: UserItemComponent,
    data: { title: 'Visualizar Usuário', endPoint: 'user' }
  },
  {
    path: 'edit/:id',
    component: UserItemComponent,
    data: { title: 'Editar Usuário', endPoint: 'user' }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
    static components = [
        UserListComponent,
        UserItemComponent
    ]
};