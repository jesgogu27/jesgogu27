import { Component, NgModule } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { firstValueFrom } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  //submitProduct: any;
  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: '',
  };

  constructor(private productService: ProductService,
    private route: Router,
  ) {}
  async submitProduct() {
    try {
      const res = await firstValueFrom(this.productService.createProduct(this.product));
      console.log('Esperando respuesta ', res);
      this.route.navigate(['/'])
    } catch (err) {
      console.error(err);
    }
  }
}
