import { IsNotEmpty } from 'class-validator';

export class CreateDisciplinaProfessorDto {
  @IsNotEmpty()
  disciplinaId: number;
  @IsNotEmpty()
  professorId: number;
}
