import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get()
  getBrandIndex() {
    return 'Bienvenido a la sección Marca';
  }
  @Post('CreateBrand')
  posCreatBrand(@Body() brand: any) {
    return {
      message: 'Bienvenido, estas creando tu marca ',
      brand,
    };
  }

  @Put('modificarBrand/:id')
  putModifBrand(@Param() id: any, @Body() brand: any) {
    return {
      id,
      brand,
    };
  }

  @Delete('deleteBrand/:id')
  deleteBrand(@Param() id: any) {
    return { id };
  }
}
