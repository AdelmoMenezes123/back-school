import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTurmaProfessorDto } from './dto/create-turma-professor.dto';
import { TurmaProfessorService } from './turma-professor.service';

@Controller('turma-professor')
export class TurmaProfessorController {
  constructor(private readonly turmaProfessorService: TurmaProfessorService) {}

  @Post()
  async create(@Body() createTurmaProfessorDto: CreateTurmaProfessorDto) {
    return await this.turmaProfessorService.create(createTurmaProfessorDto);
  }

  @Get()
  async findAll() {
    return await this.turmaProfessorService.findAll();
  }
}
