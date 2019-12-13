import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
  // providers: [UserService]
})
@NgModule({
  providers: [UserService]
})
export class SearchListComponent implements OnInit {

  searchTerm = "";
  searchList = [User];
  sepratedSearchTerm = {
    fName: '',
    lName: ''
  }
  followBtnData = {
    loggedInUserId: '',
    clickedUserId: ''
  }
  loggedInUserId: string;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loggedInUserId = this.userService.getUserPayload().userId;
    this.getSearchList();
  }

  getSearchList() {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');
    this.sepratedSearchTerm.fName = this.searchTerm.split(" ")[0];
    this.sepratedSearchTerm.lName = this.searchTerm.split(" ")[1];

    this.userService.getSearchList(this.sepratedSearchTerm).subscribe(data => {
      this.postExecuteGetSearchList(data);
    })
  }

  postExecuteGetSearchList(data: any) {
    if (data.status == "success") {
      data.data.forEach((itm: User) => {
        itm.btnType = "follow";
        itm.followers.forEach(follower => {
          if (this.loggedInUserId == follower) {
            itm.btnType = "none";
          }
        })

        itm.following.forEach(following => {
          if (this.loggedInUserId == following && itm.btnType == "follow") {
            itm.btnType = "follow back";
          }
        })
      });

      this.searchList = data.data;
    }
    else if (data.status == "No User") {

    }
    else {
      alert(data.msg);
    }
  }
  userClicked(user: User) {
    // this.router.navigate(['/userProfile/' + user]);
    console.log(user.fName);

    this.userService.setUser(user);
    this.router.navigate(['userProfile']);
  }

  followBtnClick(clickedUserId: string) {
    debugger
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
