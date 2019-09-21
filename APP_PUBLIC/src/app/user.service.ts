import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  private URLUSER = 'http://localhost:3000/api/user';
  private URLEMAILEXIST = 'http://localhost:3000/api/isEmailExist/';
  private LOGIN = 'http://localhost:3000/api/login';
  private URL_GETUSERNAMES = 'http://localhost:3000/api/getUserNames';


  createUser(formdata: FormData) {

    // this.http.post(this.URLUSER, formdata)
    //   .subscribe(data => { // use HttpClient for this functionality
    //     res = data;
    //     console.log(res.msg);
    //   });


    return this.http.post(this.URLUSER, formdata, this.noAuthHeader);
  }

  getUserById() {
    console.log(this.getUserPayload() + "Payload");
    return this.http.get(this.URLUSER + "/" + this.getUserPayload().userId);
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

}
