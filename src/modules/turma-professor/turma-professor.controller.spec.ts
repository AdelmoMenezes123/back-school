import { Test, TestingModule } from '@nestjs/testing';
import { TurmaProfessorController } from './turma-professor.controller';
import { TurmaProfessorService } from './turma-professor.service';

describe('TurmaProfessorController', () => {
  let controller: TurmaProfessorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TurmaProfessorController],
      providers: [TurmaProfessorService],
    }).compile();

    controller = module.get<TurmaProfessorController>(TurmaProfessorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
