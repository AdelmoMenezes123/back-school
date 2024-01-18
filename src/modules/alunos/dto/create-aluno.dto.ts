import { IsNotEmpty, Length } from 'class-validator';

export class CreateAlunoDto {
  @IsNotEmpty()
  @Length(3, 45)
  nome: string;
  @IsNotEmpty()
  matricula: string;
  @IsNotEmpty()
  turmaId: number;
}
