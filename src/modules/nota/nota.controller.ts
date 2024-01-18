import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { NotaService } from './nota.service';

@Controller('nota')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @Post()
  create(@Body() createNotaDto: CreateNotaDto) {
    return this.notaService.create(createNotaDto);
  }

  @Get()
  findAll() {
    return this.notaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notaService.findOne(+id);
  }
}
