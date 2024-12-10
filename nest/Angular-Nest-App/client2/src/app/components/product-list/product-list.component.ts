import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { firstValueFrom } from 'rxjs';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  productos: Product[] = []; // Asegúrate de que es un array

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  // Opción 1: Usar async/await con firstValueFrom
  async getProduct() {
    try {
      const res = await firstValueFrom(this.productService.getProducts());
      console.log('Productos recibidos:', res);
      this.productos = res // Asigna los productos al array
    } catch (err) {
      console.error('Error al obtener productos:', err);
    }
  }
}
