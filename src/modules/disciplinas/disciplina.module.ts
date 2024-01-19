import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { AuthGuardService } from '../auth-guard/auth-guard.service';
import { DisciplinaController } from './disciplina.controller';
import { DisciplinaService } from './disciplina.service';

@Module({
  controllers: [DisciplinaController],
  providers: [DisciplinaService, PrismaService, AuthGuardService],
})
export class DisciplinaModule {}
