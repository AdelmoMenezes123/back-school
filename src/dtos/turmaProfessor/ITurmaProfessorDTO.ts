import { IsNotEmpty } from 'class-validator';

export class ITutmaProfessorDTO {
  @IsNotEmpty()
  turmaId: number;
  @IsNotEmpty()
  professorId: number;
}
