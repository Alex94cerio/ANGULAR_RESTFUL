import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/User';
import {Role} from '../../interfaces/Role';
import {MaritalStatus} from '../../interfaces/MaritalStatus';
import {Skill} from '../../interfaces/Skill';
import {USER_EDIT_CONFIG} from './UserEditConf';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {RoleService} from '../../services/role.service';
import {MaritalStatusService} from '../../services/marital-status.service';
import {SkillService} from '../../services/skill.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() user: User = {
    id: null,
    firstName: '',
    lastName: '',
    birthdate: null,
    fileName: '',
    role: { id: null, name: ''},
    maritalStatus: { id: null, name: ''},
    skillList: []
  };

  private roles: Role[] = [];
  private maritalStatuses: MaritalStatus[] = [];
  private skills: Skill[] = [];


  private BUTTONS = USER_EDIT_CONFIG.BUTTONS;
  private errors;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private roleService: RoleService,
    private maritalStatusService: MaritalStatusService,
    private skillService: SkillService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
    this.getRoles();
    this.getMaritals();
    this.getSkills();
  }

  getRoles(): void {
    this.roleService.getRoles()
      .subscribe( roles => this.roles = roles );
  }

  getMaritals(): void {
    this.maritalStatusService.getMaritalStatuses()
      .subscribe( mSs => this.maritalStatuses = mSs );
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  compareById(attr1, attr2) {
    return attr1 && attr2 && attr1.id === attr2.id;
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.createUser(this.user)
      .subscribe((result) => {
        if (result.errors) {
          this.errors = result.errors;
        } else {
          this.goBack();
        }
      });
  }

}
