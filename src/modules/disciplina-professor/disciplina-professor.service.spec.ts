import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinaProfessorService } from './disciplina-professor.service';

describe('DisciplinaProfessorService', () => {
  let service: DisciplinaProfessorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplinaProfessorService],
    }).compile();

    service = module.get<DisciplinaProfessorService>(
      DisciplinaProfessorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
