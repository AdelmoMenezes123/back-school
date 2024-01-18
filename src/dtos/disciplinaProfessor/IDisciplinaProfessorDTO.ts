import { IsNotEmpty } from 'class-validator';

export class IDisciplinaProfessorDTO {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  disciplinaId: number;
  @IsNotEmpty()
  professorId: number;
}
