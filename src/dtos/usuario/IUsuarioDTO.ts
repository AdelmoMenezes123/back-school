import { IsNotEmpty, Length } from 'class-validator';

export class IUsuarioDTO {
  @IsNotEmpty()
  @Length(5, 100)
  username: string;
  @IsNotEmpty()
  @Length(5, 100)
  senha: string;
  role: string;
}
