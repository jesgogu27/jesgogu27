import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get()
  getIndexOrder() {
    return 'Bienvenido a la sección de Ordenes';
  }

  @Post('createOrder')
  postOrderCreate(@Body() order: any) {
    return {
      message: 'Creando una orden',
      order,
    };
  }

  @Put('modificarOrder/:orderId')
  modificarOrder(@Param() orderId: string, @Body() order: any) {
    return {
      orderId,
      order,
    };
  }

  @Delete('deleteOrder/:orderId')
  deleteOrder(@Param('orderId') orderId: string) {
    return `El producto eliminado fue ${orderId}`;
  }
}
