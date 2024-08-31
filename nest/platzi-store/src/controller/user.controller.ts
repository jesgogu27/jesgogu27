import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  postUser(@Body() payload: any) {
    return { message: 'Creando Usuario', payload: payload };
  }

  @Put('modificarUser/:userId')
  modificarUsuario(@Param() userID: string, @Body() payloadUser: any) {
    return {
      userID,
      payloadUser,
    };
  }

  @Delete('deleteUser/:userId')
  deleteUser(@Param('userId') userId: string) {
    return `EL Usuario eliminado fue ${userId}`;
  }
}
