import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinaProfessorController } from './disciplina-professor.controller';
import { DisciplinaProfessorService } from './disciplina-professor.service';

describe('DisciplinaProfessorController', () => {
  let controller: DisciplinaProfessorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplinaProfessorController],
      providers: [DisciplinaProfessorService],
    }).compile();

    controller = module.get<DisciplinaProfessorController>(
      DisciplinaProfessorController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
