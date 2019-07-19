import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/User';
import {UserService} from '../../services/user.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {


  constructor(
    private userService: UserService,
    private location: Location,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.userService.deleteUser(userId).subscribe(
      data => {
        console.log(data);
        this.location.back();
      },
      error => console.log(error));
  }

  private goBack() {

  }
}
