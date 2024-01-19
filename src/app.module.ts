import { Module } from '@nestjs/common';
import { AlunosModule } from './modules/alunos/aluno.module';
import { AuthModule } from './modules/auth/auth.module';
import { DisciplinaProfessorModule } from './modules/disciplina-professor/disciplina-professor.module';
import { DisciplinaModule } from './modules/disciplinas/disciplina.module';
import { NotaModule } from './modules/nota/nota.module';
import { ProfessorModule } from './modules/professor/professor.module';
import { TurmaProfessorModule } from './modules/turma-professor/turma-professor.module';
import { TurmaModule } from './modules/turma/turma.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AuthGuardModule } from './modules/auth-guard/auth-guard.module';

@Module({
  imports: [
    DisciplinaModule,
    AlunosModule,
    DisciplinaProfessorModule,
    NotaModule,
    ProfessorModule,
    TurmaModule,
    TurmaProfessorModule,
    UsuarioModule,
    AuthModule,
    AuthGuardModule,
  ],
})
export class AppModule {}
