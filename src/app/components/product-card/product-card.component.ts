import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Producto } from 'src/app/Producto';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() producto:Producto; 
  constructor(private router:Router, private data:DataService) { }

  ngOnInit(): void {
  }

  redirect(){
    this.data.productoActual = this.producto
    this.router.navigate(['productDetail'])
  }
}
