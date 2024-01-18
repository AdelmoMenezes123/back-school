import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    await this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  async findAll() {
    return await this.usuarioService.findAll();
  }
}
