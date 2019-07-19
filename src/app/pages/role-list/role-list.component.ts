import { Component, OnInit } from '@angular/core';
import {Role} from '../../interfaces/Role';
import {RoleService} from '../../services/role.service';
import {TableConfig} from '../../interfaces/TableConfig';
import {ROLE_TABLE_CONFIGURATION} from './RoleTableConfig';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {


  private roleTabConf: TableConfig;
  private roles: Role[];

  constructor(
    private roleService: RoleService
  ) {
  }

  ngOnInit() {
    this.getRoles();
    this.initTableConfig();
  }

  initTableConfig() {
    this.roleTabConf = ROLE_TABLE_CONFIGURATION;
  }

  getRoles(): void {
    this.roleService.getRoles()
      .subscribe(users => this.roles = users);
  }
}

