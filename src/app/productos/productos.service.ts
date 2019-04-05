import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from './Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cambiaDato = new Subject<Producto[]>();

  productos: Producto[] = [
    new Producto(1, 'Omen C15', 'HP', 'Laptop', 18000, 5),
    new Producto(2, "Notebook HP 15", "HP", "Laptop", 8900, 20),
    new Producto(3, "COD: BO 4", "Activision", "Videojuego", 1200, 10),
    new Producto(4, "Legion Y530", "Lenovo", "Laptop", 24000, 3),
    new Producto(5, "GT75 Titan 4k", "MSI", "Laptop", 89000, 2),
    new Producto(6, "TES IV: Oblivion", "Bethesda", "Videojuego", 200, 14),
    new Producto(7, "League of Legends", "Riot Games", "Videojuego", 1500, 6),
    new Producto(8, "Undertale SE", "Toby Fox", "Videojuego", 800, 8),
  ];

  carrito: Producto[] = [];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  getProducto(id: number) {
    const pos = this.productos.findIndex(p => p.id === id);
    return Object.assign({}, this.productos[pos]);
  }

  getCarrito(): Producto[] {
    return this.carrito.slice();
  }

  addCarrito(id: number): boolean {
    console.log(id);
    if (!this.carrito.find(p => p.id === id)) {
      this.carrito.push(this.getProducto(id));
      return true;
    }
    return false;
  }

  borrarCarrito(id: number): boolean {
    const pos = this.carrito.findIndex(p => p.id === id);
    if (pos >= 0) {
      this.carrito.splice(pos, 1);
      this.notificarCambios();
      return true;
    }
    return false;
  }

  private notificarCambios() {
    this.cambiaDato.next(this.productos.slice());
  }

}
