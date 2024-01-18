import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';

@Module({
  controllers: [ProfessorController],
  providers: [ProfessorService, PrismaService],
})
export class ProfessorModule {}
