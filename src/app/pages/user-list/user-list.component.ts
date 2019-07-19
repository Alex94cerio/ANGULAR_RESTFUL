import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/User';
import {UserService} from '../../services/user.service';
import {TableConfig} from '../../interfaces/TableConfig';
import {USER_TABLE_CONFIGURATION} from './UserTableConfig';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private userTabConf: TableConfig;
  private users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.initTableConfig();
  }

  initTableConfig() {
    this.userTabConf = USER_TABLE_CONFIGURATION;
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe( users => this.users = users );
  }


}
