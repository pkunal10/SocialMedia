import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserPost } from './user-post';

@Injectable()
export class UserPostService {

  private _refreshNeeded$ = new Subject<void>();
  refreshNeed = false;

  setRefreshNeed(isNeed: boolean) {
    this.refreshNeed = isNeed;
  }
  getRefreshNeed() {
    return this.refreshNeed;
  }

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  URLCREATEPOST = "http://localhost:3000/api/postwithoutmedia";
  URLCREATEPOSTWITHMEDIA = "http://localhost:3000/api/postwithmedia";
  URL_GET_POSTS_BY_USERID = "http://localhost:3000/api/getPostsByUserId";
  URL_GET_POSTS_BY_FOLLOWINGIDS = "http://localhost:3000/api/getPostsByFollowingIds";
  URL_LIKE_UNLIKE = "http://localhost:3000/api/likeUnlike";

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  createpost(postData: any) {
    return this.http.post(this.URLCREATEPOST, postData);
  }
  createpostWithMedia(formdata: FormData) {
    return this.http.post(this.URLCREATEPOSTWITHMEDIA, formdata);
  }

  getPostsByUserId(userId: string) {
    // return this.http.get(this.URL_GET_POSTS_BY_USERID + "/" + userId).pipe(tap(() => {
    //   this.refreshNeeded$.next();
    // }))
    return this.http.get(this.URL_GET_POSTS_BY_USERID + "/" + userId);
  }
  getPostsByFollowingIds(userId: string) {
    // return this.http.get(this.URL_GET_POSTS_BY_USERID + "/" + userId).pipe(tap(() => {
    //   this.refreshNeeded$.next();
    // }))
    return this.http.get(this.URL_GET_POSTS_BY_FOLLOWINGIDS + "/" + userId);
  }

  likeUnlike(data: any) {
    return this.http.post(this.URL_LIKE_UNLIKE, data);
  }
}
