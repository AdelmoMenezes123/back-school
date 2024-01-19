import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth-guard/auth.guard';
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
  @UseGuards(AuthGuard)
  async findAll() {
    const todos = await this.disciplinaService.findAll();
    return todos;
  }
}
