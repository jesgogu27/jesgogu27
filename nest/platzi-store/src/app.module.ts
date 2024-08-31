import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CategoriesController } from './controller/categories.controller';
import { ProductsController } from './controller/products.controller';
import { BrandController } from './controller/brand.controller';
import { CustomerController } from './controller/customer.controller';
import { OrderController } from './controller/order.controller';
import { UserController } from './controller/user.controller';
import { ProductsService } from './service/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    ProductsController,
    BrandController,
    CustomerController,
    OrderController,
    UserController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
