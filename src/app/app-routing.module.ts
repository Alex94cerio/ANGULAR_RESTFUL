import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './pages/user-list/user-list.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {RoleListComponent} from './pages/role-list/role-list.component';
import {DeleteUserComponent} from './pages/delete-user/delete-user.component';
import {UserEditComponent} from './pages/user-edit/user-edit.component';
import {UserAddComponent} from './pages/user-add/user-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/delete/:id', component: DeleteUserComponent },
  { path: 'roles', component: RoleListComponent },
  { path: 'users/add-user', component: UserAddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
