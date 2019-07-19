import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDetailComponent } from './components/table-detail/table-detail.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgPipesModule} from 'ngx-pipes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ButtonDetailComponent } from './components/button-detail/button-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoleListComponent } from './pages/role-list/role-list.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TableDetailComponent,
    HomePageComponent,
    ButtonDetailComponent,
    NavbarComponent,
    RoleListComponent,
    DeleteUserComponent,
    UserAddComponent,
    UserEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgPipesModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonToggleModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
