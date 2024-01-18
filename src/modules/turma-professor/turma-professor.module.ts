import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TurmaProfessorController } from './turma-professor.controller';
import { TurmaProfessorService } from './turma-professor.service';

@Module({
  controllers: [TurmaProfessorController],
  providers: [TurmaProfessorService, PrismaService],
})
export class TurmaProfessorModule {}
