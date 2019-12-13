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
  inputEl: HTMLInputElement;
  inputFname: HTMLInputElement;
  inputLname: HTMLInputElement;
  inputEmailId: HTMLInputElement;
  inputMobile: HTMLInputElement;
  inputLine1: HTMLInputElement;
  inputCity: HTMLInputElement;
  inputState: HTMLInputElement;
  inputCountry: HTMLInputElement;
  inputPassword: HTMLInputElement;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private http: HttpClient, private frameWorkComponent: FrameWorkComponent, private router: Router, private elementRef: ElementRef, private userService: UserService) { }

  ngOnInit() {

  }

  radioCheck(gender: string) {
    this.slectedGender = gender;
    //  alert(this.slectedGender);
  }

  register() {
    //locate the file element meant for the file upload.
    this.inputEl = this.elementRef.nativeElement.querySelector('#profilePic');
    this.inputFname = this.elementRef.nativeElement.querySelector('#fName');
    this.inputLname = this.elementRef.nativeElement.querySelector('#lName');
    this.inputEmailId = this.elementRef.nativeElement.querySelector('#emailIdReg');
    this.inputMobile = this.elementRef.nativeElement.querySelector('#mobile');
    this.inputLine1 = this.elementRef.nativeElement.querySelector('#line1');
    this.inputCity = this.elementRef.nativeElement.querySelector('#city');
    this.inputState = this.elementRef.nativeElement.querySelector('#state');
    this.inputCountry = this.elementRef.nativeElement.querySelector('#country');
    this.inputPassword = this.elementRef.nativeElement.querySelector('#passwordReg');
    //get the total amount of files attached to the file input.
    let fileCount: number = this.inputEl.files.length;
    debugger
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected      
      formData.append('userImage', this.inputEl.files.item(0));
      formData.append('fName', this.inputFname.value);
      formData.append('lName', this.inputLname.value);
      formData.append('emailId', this.inputEmailId.value);
      formData.append('mobile', this.inputMobile.value);
      formData.append('gender', this.slectedGender);
      formData.append('line1', this.inputLine1.value);
      formData.append('city', this.inputCity.value);
      formData.append('state', this.inputState.value);
      formData.append('country', this.inputCountry.value);
      formData.append('password', this.inputPassword.value);


      this.userService.createUser(formData).subscribe(data => {
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
      this.clear();
    }
    else {
      alert(res.msg);
    }
  }

  clear() {
    this.inputEl.value = "";
    this.inputFname.value = "";
    this.inputLname.value = "";
    this.inputEmailId.value = "";
    this.inputMobile.value = "";
    this.inputLine1.value = "";
    this.inputCity.value = "";
    this.inputState.value = "";
    this.inputCountry.value = "";
    this.inputPassword.value = "";
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
