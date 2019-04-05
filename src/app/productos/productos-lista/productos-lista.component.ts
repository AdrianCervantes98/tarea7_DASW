import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { Subscription } from 'rxjs';
import { ProductosService } from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  productos: Producto[];
  modoCarrito = false;

  subscript: Subscription;

  constructor(private productoService: ProductosService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.url === '/carrito') {
      this.modoCarrito = true;
      this.productos = this.productoService.getCarrito();
    } else {
      this.modoCarrito = false;
      this.productos = this.productoService.getProductos();
    }
  }

  borrarDeCarrito(producto: Producto) {
    this.productoService.borrarCarrito(producto.id);
  }

  agregarACarrito(producto: Producto) {
    this.productoService.addCarrito(producto.id);
  }

  inspeccionar(producto) {
    this.router.navigate([producto.id], { relativeTo: this.route });
  }

}
