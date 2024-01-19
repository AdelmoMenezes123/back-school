import { ViewProfessorDto } from '../../professor/dto/view-professor.dto';
export class ViewUsuarioDto {
  id?: number;
  username: string;
  senha?: string;
  role?: string;
  Professor?: ViewProfessorDto;
  createdAt?: Date;
}
