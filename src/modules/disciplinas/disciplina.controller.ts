import { Body, Controller, Get, Post } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';

@Controller()
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}
  @Post('disciplina/create')
  async create(@Body() body: CreateDisciplinaDto) {
    await this.disciplinaService.create(body);
  }

  @Get('disciplinas')
  async findAll() {
    const todos = await this.disciplinaService.findAll();
    return todos;
  }
}
