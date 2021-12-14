import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductListComponent } from './view/product-list/product-list.component';
import { ProductDetailComponent } from './view/product-detail/product-detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
