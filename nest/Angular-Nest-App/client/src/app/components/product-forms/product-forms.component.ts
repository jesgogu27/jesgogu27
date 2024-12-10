import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrl: './product-forms.component.css'
})
export class ProductFormsComponent { product: Product = {
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
