import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { AlunosController } from './aluno.controller';
import { AlunosService } from './aluno.service';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService, PrismaService],
})
export class AlunosModule {}
