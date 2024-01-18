import { IsNotEmpty } from 'class-validator';

export class IProfessorDTO {
  @IsNotEmpty()
  name: string;
  usuario: string;
  senha: string;
  turmas: string[];
}
