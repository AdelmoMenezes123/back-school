import { IsNotEmpty, Length } from 'class-validator';

export class CreateDisciplinaDto {
  @IsNotEmpty()
  @Length(3, 45)
  nome: string;
}
