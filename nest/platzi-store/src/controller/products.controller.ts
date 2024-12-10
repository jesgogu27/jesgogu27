/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller()
export class ProductsController {

  @Get()
  getProducts() {
    return 'Bienvenidos a productos';
  }



  @Get()
  getProductFilter(
    @Query('limit') limit: number = 100, //limitando el limete  a 100
    @Query('offset') offset: number = 50,
    @Query('brand') brand: string = 'N/A',)
    {
    return ` Filtro de producto limite ${limit} de ${offset} de la marca ${brand}`;
    }

  @Get('products')
  getProductsQuery(@Query('limit') limit: number, @Query('offset') offset: number){
   // const {limit, offset} = param;
    return `Productos: limite=> ${limit}  offset=> ${offset}`;
  }

  @Get(':idProduct')
  getProductId(@Param() params: any) {
    return `El id del producto ${params.idProduct}`;
  }

  @Get(':idProduct2')
  getProductId2(@Param('idProduct2') idProduct2: string) {
    return `El id del producto ${idProduct2}`;
  }

  @Post()
  postProductsCreate(@Body() product: any) {
    return {
      "message": "Creando un producto",
      product
    };
  }

  @Put('modificarProducto/:productId')
  modificarProducto(@Param() productId: any, @Body() product: any) {
    return {
      productId,
      product,
    };
  }

  @Delete('deleteProduct')
  deleteProduct(@Param('idProduct') idProduct) {
    return `El producto del producto ${idProduct}`;
  }

}
