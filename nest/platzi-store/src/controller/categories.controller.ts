import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories() {
    return 'Bienvenido a Categorias';
  }

  @Get(':idProduct3/:idCategoryProduct')
  getCategory(
    @Param('idProduct3') idProduct3: string,
    @Param('idCategoryProduct') idCategoryProduct: string,
  ) {
    return `El Id del producto ${idProduct3} y el Id de la categoria es ${idCategoryProduct}`;
  }

  @Put('modificarCategory/:idProduct')
  putCategories(@Param() idProduct5: string, @Body() payload: any) {
    return {
      idProduct5,
      payload,
    };
  }

  @Delete('deleteCategory/:idProduct')
  deleteCategory(@Param('idProduct') idProduct: string) {
    return `El producto eliminado  es ${idProduct}`;
  }
}
