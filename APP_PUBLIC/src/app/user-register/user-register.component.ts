import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Http} from '@angular/http';
import { UserService } from '../user.service';
import { from } from 'rxjs';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { FrameWorkComponent } from '../frame-work/frame-work.component';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  providers: [UserService, FrameWorkComponent]
})
export class UserRegisterComponent implements OnInit {
  slectedGender: string = "Male";
  isExist: string = "";
  res: any;
  model = {
    emailId: '',
    password: ''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private http: HttpClient, private frameWorkComponent: FrameWorkComponent, private router: Router, private elementRef: ElementRef, private userService: UserService) { debugger}

  ngOnInit() {
        
  }

  // isEmailExist(email: string): string {
  //   this.userService.isEmailExist(email)
  //     .subscribe(data => {
  //       console.log(data, "in isEmailExistSubscribe")

  //       console.log(this.isEmailExistPostExecute(data), "from postEmailEist");
  //       if (this.isEmailExistPostExecute(data) == "no") {
  //         this.isExist = "no";
  //       }
  //       else {
  //         this.isExist = "yes";
  //       }

  //     });
  //   console.log(this.isExist)
  //   return this.isExist;
  // }

  // isEmailExistPostExecute(res: any): string {

  //   console.log(res, " in isEmailExistPostExecute");
  //   if (res.status == "no") {
  //     // alert(res.msg);        
  //     return "no";
  //   }
  //   else {
  //     let inputEmailId: HTMLInputElement = this.elementRef.nativeElement.querySelector('#emailId');
  //     inputEmailId.value = "";
  //     return "yes";
  //   }
  // }
  radioCheck(gender: string) {
    this.slectedGender = gender;
    //  alert(this.slectedGender);
  }

  register() {
    //locate the file element meant for the file upload.
    let inputEl: HTMLInputElement = this.elementRef.nativeElement.querySelector('#profilePic');
    let inputFname: HTMLInputElement = this.elementRef.nativeElement.querySelector('#fName');
    let inputLname: HTMLInputElement = this.elementRef.nativeElement.querySelector('#lName');
    let inputEmailId: HTMLInputElement = this.elementRef.nativeElement.querySelector('#emailId');
    let inputMobile: HTMLInputElement = this.elementRef.nativeElement.querySelector('#mobile');
    let inputLine1: HTMLInputElement = this.elementRef.nativeElement.querySelector('#line1');
    let inputCity: HTMLInputElement = this.elementRef.nativeElement.querySelector('#city');
    let inputState: HTMLInputElement = this.elementRef.nativeElement.querySelector('#state');
    let inputCountry: HTMLInputElement = this.elementRef.nativeElement.querySelector('#country');
    let inputPassword: HTMLInputElement = this.elementRef.nativeElement.querySelector('#password');
    //get the total amount of files attached to the file input.
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected      
      formData.append('userImage', inputEl.files.item(0));
      formData.append('fName', inputFname.value);
      formData.append('lName', inputLname.value);
      formData.append('emailId', inputEmailId.value);
      formData.append('mobile', inputMobile.value);
      formData.append('gender', this.slectedGender);
      formData.append('line1', inputLine1.value);
      formData.append('city', inputCity.value);
      formData.append('state', inputState.value);
      formData.append('country', inputCountry.value);
      formData.append('password', inputPassword.value);

      // var response = this.isEmailExist(inputEmailId.value);
      // console.log(response);
      // if (response == "no") {
      this.userService.createUser(formData).subscribe(data => {
        // console.log(data);
        //this.res=data;
        this.postExecute(data);
      });

      // console.log(this.res,"success")
      // }
      // else {
      //   alert("Email id already exist.")
      // }
    }
    else {
      alert('Select profile pic.')
    }
  }

  postExecute(res: any) {
    if (res.status == "success") {
      alert(res.msg);
    }
    else {
      alert(res.msg);
    }
  }

  login(model) {
    this.userService.login(model).subscribe(data => {
      this.postLogin(data);
    })
  }

  postLogin(res: any) {
    if (res.status == "success") {
      this.userService.setToken(res.token);      
      this.router.navigate(['home']);
    }
    else {
      alert(res.msg);
    }
  }

}
