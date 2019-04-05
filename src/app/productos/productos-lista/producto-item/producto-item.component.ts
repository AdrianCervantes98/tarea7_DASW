import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/productos/Producto';
import { ProductosService } from '../../productos.service';


@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  constructor() { }

  @Input() producto: Producto[];
  @Output() addToCart = new EventEmitter();
  @Output() removeFromCart = new EventEmitter();
  @Output() infoProduct = new EventEmitter();

  ngOnInit() {
  }

  quitarProducto() {
    this.removeFromCart.emit(this.producto);
  }

  anadirProducto() {
    this.addToCart.emit(this.producto);
  }

  infoProducto() {
    this.infoProduct.emit(this.producto);
  }



}
