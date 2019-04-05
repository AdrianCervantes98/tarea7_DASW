import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  id: number;
  nombre: string;
  marca: string;
  categoria: string;
  precio: number;
  existencia: number;

  constructor(private productosService: ProductosService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = Number(params.id);
        const producto = this.productosService.getProducto(this.id);
        this.nombre = producto.nombre;
        this.marca = producto.marca;
        this.categoria = producto.categoria;
        this.precio = producto.precio;
        this.existencia = producto.existencia;
      }
    );
  }

}
