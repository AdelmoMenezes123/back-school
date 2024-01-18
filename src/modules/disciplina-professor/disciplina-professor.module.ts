import { Module } from '@nestjs/common';
import { PrismaService } from './../../database/prisma.service';
import { DisciplinaProfessorController } from './disciplina-professor.controller';
import { DisciplinaProfessorService } from './disciplina-professor.service';

@Module({
  controllers: [DisciplinaProfessorController],
  providers: [DisciplinaProfessorService, PrismaService],
})
export class DisciplinaProfessorModule {}
