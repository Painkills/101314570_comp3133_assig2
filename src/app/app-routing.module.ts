import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpEditingComponent } from './emp-editing/emp-editing.component';
import { EmpAddingComponent } from './emp-adding/emp-adding.component';
import { UserAddingComponent } from './user-adding/user-adding.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/AuthService';


const routes: Routes = [
  { path: 'editEmp', component: EmpEditingComponent, pathMatch: 'prefix', canActivate: [AuthService]},
  { path: 'addEmp', component: EmpAddingComponent, pathMatch: 'prefix', canActivate: [AuthService]},
  { path: 'addUser', component: UserAddingComponent, pathMatch: 'prefix', canActivate: [AuthService]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
