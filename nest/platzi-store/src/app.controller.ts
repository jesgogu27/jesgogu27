import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndPoint() {
    return 'yo soy nuevo';
  }

  /**
   *OBETNER PRODUCTO ID
   * @param params
   * @returns
   */
  @Get('products/:id/:name') //:id  y :name son los parametros que voy a recibir
  getProduct(@Param() params: any) {
    return `El producto es ${params.id} y de nombre ${params.name}`;
  }

  /**
   * @param id, valor con el que se buscará el producto
   */
  @Get('Id/:id')
  getId(id: number) {
    return `El id es ${id}`;
  }

  /**
   * Empleo query para consultar por varios parametros
   * @param params
   * @returns
   */
  @Get('FilterProducts')
  getFlterProduct(@Query() params: any) {
    const { limit, marca, cantidadPresentacion } = params;
    return `Los productos encontrados con estas caracteristicas son: Limite => ${limit} Marca => ${marca} Cantidad Presentación => ${cantidadPresentacion}`;
  }

  /**
   *
   * @param prodduct
   * @returns
   */
  @Get('productos/:productosId')
  getProductos(@Param('productosId') productosId: string) {
    return `producto ${productosId}`;
  }

  /**
   *
   * @param idCategory
   * @param idProduct+
   * @returns
   */

  @Get('categories/:idCategory/products/:idProduct')
  getCategories(
    @Param('idCategory') idCategory: string,
    @Param('idProduct') idProduct: string,
  ) {
    return `La categoria es ${idCategory} y el product ${idProduct}`;
  }

  /**
   *
   */

}
