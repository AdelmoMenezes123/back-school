import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { NotaController } from './nota.controller';
import { NotaService } from './nota.service';

@Module({
  controllers: [NotaController],
  providers: [NotaService, PrismaService],
})
export class NotaModule {}
