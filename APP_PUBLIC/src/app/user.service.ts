import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class UserService {

  user: User;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  private URLUSER = 'http://localhost:3000/api/user';
  private URLEMAILEXIST = 'http://localhost:3000/api/isEmailExist/';
  private LOGIN = 'http://localhost:3000/api/login';
  private URL_GETUSERNAMES = 'http://localhost:3000/api/getUserNames';
  private URL_GET_SEARCH_LIST = 'http://localhost:3000/api/getSearchList';
  private URL_FOLLOW_BTN_CLICK = 'http://localhost:3000/api/followBtnClicked';


  createUser(formdata: FormData) {
    return this.http.post(this.URLUSER, formdata, this.noAuthHeader);
  }

  getUserById() {
    return this.http.get(this.URLUSER + "/" + this.getUserPayload().userId);
  }
  getUserByIdParam(userId:string) {
    return this.http.get(this.URLUSER + "/" + userId);
  }

  // isEmailExist(email: string) {    
  //   return this.http.get(this.URLEMAILEXIST + email);

  // }

  login(credential) {
    return this.http.post(this.LOGIN, credential, this.noAuthHeader);
  }
  setToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  deleteToken() {
    localStorage.removeItem("token");
  }
  getUserPayload() {
    if (localStorage.getItem("token")) {
      var payload = atob(localStorage.getItem("token").split('.')[1]);
      return JSON.parse(payload);
    }
    else {
      return null;
    }
  }

  isLogedin() {
    var userayLoad = this.getUserPayload();
    if (userayLoad) {
      return userayLoad.exp > Date.now() / 1000;
    }
    else {
      return false;
    }
  }


  getUSerNames() {
    return this.http.get(this.URL_GETUSERNAMES);
  }

  getSearchList(data) {
    return this.http.post(this.URL_GET_SEARCH_LIST, data);
  }

  followBtnClick(data) {
    return this.http.post(this.URL_FOLLOW_BTN_CLICK, data);
  }
  setUser(selectedUser: User) {
    this.user = selectedUser;
  }
  getUser() {
    return this.user;
  }
}
