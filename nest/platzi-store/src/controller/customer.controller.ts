import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get()
  getIndexCustomer() {
    return 'Bienvenido a Customer';
  }

  @Post()
  getCreateCustomer(@Body() customer: any) {
    return {
      message: 'Creando Customer',
      customer,
    };
  }

  @Put('modificarVendedor/:customerId')
  putCustumers(@Param() customerId: string, @Body() customer: any) {
    return {
      customerId,
      customer,
    };
  }

  @Delete('deleteCustomer/:customerId')
  deleteCustomer(@Param('customerId') customerId: string) {
    return `EL elemento eliminado fue ${customerId}`;
  }
}
