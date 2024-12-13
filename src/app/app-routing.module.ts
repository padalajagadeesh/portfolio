import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { CameraComponent } from './camera/camera.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'', component: CameraComponent},
  {path:'home', component: MainComponent},
  {path:'camera', component: CameraComponent},
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'Projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
