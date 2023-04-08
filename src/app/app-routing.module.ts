import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpEditingComponent } from './emp-editing/emp-editing.component';
import { EmpAddingComponent } from './emp-adding/emp-adding.component';
import { UserAddingComponent } from './user-adding/user-adding.component';


const routes: Routes = [
  { path: 'editEmp', component: EmpEditingComponent, pathMatch: 'prefix'},
  { path: 'addEmp', component: EmpAddingComponent, pathMatch: 'prefix'},
  { path: 'addUser', component: UserAddingComponent, pathMatch: 'prefix'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
