import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Producto } from 'src/app/Producto';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public producto:Producto;

  constructor(private data:DataService) { 
    this.producto = this.data.productoActual
  }

  ngOnInit(): void {
    
  }

}
