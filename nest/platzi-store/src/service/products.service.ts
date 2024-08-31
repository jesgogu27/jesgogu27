import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private contadorId: number = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'bla bla blaaaa',
      price: 122,
      image: ' una direccion',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.contadorId = this.contadorId + 1;

    const newProducts = {
      id: this.contadorId,
      ...payload,
    };

    this.products.push(newProducts);
  }
}
