import { Component, OnInit } from '@angular/core';
import { FrameWorkComponent } from '../frame-work/frame-work.component';
import { UserService } from '../user.service';
import { User } from '../user';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FrameWorkComponent]
})
export class HomeComponent implements OnInit {

  user: User;
  constructor(private frameWorkComponent: FrameWorkComponent, private userService: UserService) { debugger }

  ngOnInit() {
    // this.frameWorkComponent.isLoggedIn = this.userService.isLogedin();
    // debugger
    // this.frameWorkComponent.test("i am in homee");

    this.loadUserProfile();
  }


  loadUserProfile() {
    this.userService.getUserById().subscribe(data => {      
      this.postExecute(data);
    })
  }
  postExecute(data: any) {    
    if (data.status == "success") {
      this.user = data.data;
    }
    else{
      alert(data.msg);
    }
  }
}
