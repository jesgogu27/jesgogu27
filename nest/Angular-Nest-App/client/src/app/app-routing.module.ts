import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormsComponent } from './components/product-forms/product-forms.component';
const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'product/edit/:id',
    component: ProductFormsComponent,
  },
  {
    path: 'product/create',
    component: ProductFormsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
