import { Test, TestingModule } from '@nestjs/testing';
import { TurmaProfessorService } from './turma-professor.service';

describe('TurmaProfessorService', () => {
  let service: TurmaProfessorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TurmaProfessorService],
    }).compile();

    service = module.get<TurmaProfessorService>(TurmaProfessorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
