import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { ErrorComponent } from './components/error/error.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
{path:'',redirectTo:'users',pathMatch:'full'},
{path:"users",component:UsersComponent},
{path:'users/Details/:id',component:UserDetailsComponent},
{path:'users/adduser',component:AddNewUserComponent},
//{path:'users/delete/:id',component:DeleteComponent},
{path:'users/edit/:id',component:EditUserComponent},
{path:'**',component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
