import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { DisciplinaController } from './disciplina.controller';
import { DisciplinaService } from './disciplina.service';

@Module({
  controllers: [DisciplinaController],
  providers: [DisciplinaService, PrismaService],
})
export class DisciplinaModule {}
