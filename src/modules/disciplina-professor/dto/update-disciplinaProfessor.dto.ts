import { PartialType } from '@nestjs/mapped-types';
import { CreateDisciplinaProfessorDto } from './create-disciplinaProfessor.dto';

export class UpdateDisciplinaProfessorDto extends PartialType(
  CreateDisciplinaProfessorDto,
) {}
