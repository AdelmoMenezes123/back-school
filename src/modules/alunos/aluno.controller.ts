import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlunosService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  async create(@Body() data: CreateAlunoDto) {
    return this.alunosService.create(data);
  }

  @Get()
  async findAll() {
    return this.alunosService.findAll();
  }
}
