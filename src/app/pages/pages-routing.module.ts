import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";


const routes: Routes = [{
    path: 'invoice',
    loadChildren: () => import('./invoices/invoice.module')
    .then(m => m.InvoiceModule)
}]




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
    
}