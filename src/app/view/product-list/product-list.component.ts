import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productos:Producto[] = [
    {nombre:"Camioneta", valor:20000000, imgSrc:"assets/camioneta.png", descripcion:"4x4, Diesel, Full"},
    {nombre:"Auto", valor:15000000, imgSrc:"assets/auto.jpg", descripcion:"Sedan, Diesel, Full"},
    {nombre:"Motocicleta", valor:3000000, imgSrc:"assets/moto.png", descripcion:"BMW, Combustible, Full"},
    {nombre:"Camion", valor:40000000, imgSrc:"assets/camion.jpg", descripcion:"Fabricacion Americana, 40000 MAX K.G, Full"},
    {nombre:"Bicicleta", valor:150000, imgSrc:"assets/bicicleta.jpg", descripcion:"Carbono, Aro 27, Full"},
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
