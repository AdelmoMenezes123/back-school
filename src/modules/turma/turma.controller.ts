import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { TurmaService } from './turma.service';

@Controller('turma')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()
  async create(@Body() createTurmaDto: CreateTurmaDto) {
    return await this.turmaService.create(createTurmaDto);
  }

  @Get()
  async findAll() {
    return await this.turmaService.findAll();
  }
}
