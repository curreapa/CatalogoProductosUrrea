import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public productoActual:Producto;

  constructor() {
   }
}
