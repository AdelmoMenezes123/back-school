import { IsNotEmpty, Length } from 'class-validator';

export class IAlunoDTO {
  @IsNotEmpty()
  @Length(2, 100)
  nome: string;

  @IsNotEmpty()
  @Length(4, 15)
  matricula: string;

  @IsNotEmpty()
  turmaId: number;
}
