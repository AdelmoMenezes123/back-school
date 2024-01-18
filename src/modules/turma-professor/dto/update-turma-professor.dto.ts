import { PartialType } from '@nestjs/mapped-types';
import { CreateTurmaProfessorDto } from './create-turma-professor.dto';

export class UpdateTurmaProfessorDto extends PartialType(CreateTurmaProfessorDto) {}
