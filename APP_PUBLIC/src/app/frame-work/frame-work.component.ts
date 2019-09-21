import { Component, OnInit, ElementRef, Input } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { from } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-frame-work',
  templateUrl: './frame-work.component.html',
  styleUrls: ['./frame-work.component.css'],
  providers: [UserService]
})
export class FrameWorkComponent implements OnInit {

  userNames = [];
  isShowAutoComplete: boolean = false;
  search = {
    item: ''
  }
  constructor(private http: HttpClient, private router: Router, private elementRef: ElementRef, private userService: UserService) { }

  isLoggedIn: boolean;
  ngOnInit() {
    // this.userService.deleteToken();
    this.isLoggedIn = this.userService.isLogedin();

    this.getUserNames();

  }

  keyPressSearch() {
    if (this.search.item == "") {
      this.isShowAutoComplete = false;
    }
    else {
      this.isShowAutoComplete = true;
    }
  }
  getUserNames() {
    this.userService.getUSerNames().subscribe(data => {
      this.postExecuteGetUserNames(data);
    })
  }

  postExecuteGetUserNames(data: any) {
    data.data.forEach(itm => {
      this.userNames.push(itm.fName + " " + itm.lName);
    });
    this.userNames.push("damini patel");
    this.userNames.push("jyoti patel");
    this.userNames.push("mittal patel");
  }
  test(input: string) {
    console.log(input + " " + this.userService.isLogedin());
    this.isLoggedIn = this.userService.isLogedin();
    console.log(this.isLoggedIn);
  }

  // postExecute(res: any) {
  //   console.log(res.msg + "out subscribe");
  //   console.log(res.data.fName + "out subscribe");
  // }

  getSearchValue() {
    // let ipSearch = this.elementRef.nativeElement.querySelector('#search');
    // return ipSearch.value;
    return this.search.item;
  }


  searchDropdownClick(searchItem: string) {
    this.search.item=searchItem;
    this.isShowAutoComplete=false;
    this.router.navigate(['search/' + searchItem]);
  }

}
