import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productos: any[] = []; // Asegúrate de que es un array

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  // Opción 1: Usar async/await con firstValueFrom
  async getProduct() {
    this.productService.getProducts()
    .subscribe(
      (data: any) => {

        this.productos = data.products;
        console.log(this.productos);
      },
      err=>console.log(err),)

}
}
