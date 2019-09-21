import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserPostService {

  URLCREATEPOST = "http://localhost:3000/api/postwithoutmedia";
  URLCREATEPOSTWITHMEDIA = "http://localhost:3000/api/postwithmedia";
  URL_GET_POSTS_BY_USERID = "http://localhost:3000/api/getPostsByUserId";
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  createpost(postData: any) {
    return this.http.post(this.URLCREATEPOST, postData);
  }
  createpostWithMedia(formdata: FormData) {
    return this.http.post(this.URLCREATEPOSTWITHMEDIA, formdata);
  }

  getPostsByUserId(userId: string) {
    return this.http.get(this.URL_GET_POSTS_BY_USERID + "/" + userId);
  }
}
