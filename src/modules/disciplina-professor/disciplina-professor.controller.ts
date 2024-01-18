import { Body, Controller, Get, Post } from '@nestjs/common';
import { DisciplinaProfessorService } from './disciplina-professor.service';
import { CreateDisciplinaProfessorDto } from './dto/create-disciplinaProfessor.dto';

@Controller('disciplina-professor')
export class DisciplinaProfessorController {
  constructor(
    private readonly disciplinaProfessorService: DisciplinaProfessorService,
  ) {}

  @Post('disciplinaProfessor/create')
  async create(@Body() body: CreateDisciplinaProfessorDto) {
    await this.disciplinaProfessorService.create(body);
  }

  @Get('disciplinasProfessor')
  async findAll() {
    const todos = await this.disciplinaProfessorService.findAll();
    return todos;
  }
}
