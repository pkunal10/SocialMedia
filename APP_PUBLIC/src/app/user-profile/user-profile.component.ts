import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
import { UserPostService } from '../user-post.service';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  // providers:[UserPostService,UserService]
  providers: [UserPostService]
})
@NgModule({
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {

  // @Input() user:User;
  user: User;
  loggedInUserId: string;
  followBtnData = {
    loggedInUserId: '',
    clickedUserId: ''
  }
  constructor(private userService: UserService, private userPostService: UserPostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    debugger
    this.loggedInUserId = this.userService.getUserPayload().userId;
    // this.user=this.route.snapshot.paramMap.get('user');
    this.user = this.userService.getUser();
    console.log(this.user + "selected user");
  }
  followBtnClick(clickedUserId: string) {
    this.followBtnData.loggedInUserId = this.loggedInUserId;
    this.followBtnData.clickedUserId = clickedUserId;
    this.userService.followBtnClick(this.followBtnData).subscribe(data => {
      this.postExecuteFollowBtnClick(data);
    })
  }

  postExecuteFollowBtnClick(data: any) {
    if (data.status == "success") {
      this.router.navigate(['home']);
    }
    else {
      alert(data.msg);
    }
  }

}
