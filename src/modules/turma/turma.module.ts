import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TurmaController } from './turma.controller';
import { TurmaService } from './turma.service';

@Module({
  controllers: [TurmaController],
  providers: [TurmaService, PrismaService],
})
export class TurmaModule {}
