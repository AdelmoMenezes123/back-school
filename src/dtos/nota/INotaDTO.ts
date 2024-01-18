import { IsNotEmpty, Length } from 'class-validator';

export class INotasDTO {
  @IsNotEmpty()
  @Length(2, 100)
  nome: string;

  @IsNotEmpty()
  @Length(4, 15)
  matricula: string;

  @IsNotEmpty()
  turmaId: number;

  @IsNotEmpty()
  unidade: number; // Número da unidade (1, 2, 3)
  valor: number;
  recuperacao?: number;
  @IsNotEmpty()
  alunoId: number;
}
