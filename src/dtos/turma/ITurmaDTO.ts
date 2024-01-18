import { IsNotEmpty } from 'class-validator';

export class ITutmaDTO {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  turno: string; // "Matutino" ou "Vespertino"
  @IsNotEmpty()
  data: Date;
}
