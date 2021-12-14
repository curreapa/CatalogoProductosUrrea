import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './view/product-detail/product-detail.component';
import { ProductListComponent } from './view/product-list/product-list.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'productDetail', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
