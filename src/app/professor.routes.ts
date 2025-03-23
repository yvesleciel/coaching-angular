import {Routes} from '@angular/router';
import {ProfessorHomeComponent} from './professor-home/professor-home.component';
import {ProfessorSpaceComponent} from './professor-space/professor-space.component';
import {ManageProfessorComponent} from './manage-professor/manage-professor.component';
import {AideComponent} from './aide/aide.component';

export const professorRoutes: Routes = [
  {path: '', component: ProfessorHomeComponent},
  {
    path: 'professor-space',
    component: ProfessorSpaceComponent,
    children: [
      {
        path: 'manage-professor/:classe',
        component: ManageProfessorComponent
      },
      {
        path: 'aide',
        component: AideComponent
      }
    ]
  },
]
