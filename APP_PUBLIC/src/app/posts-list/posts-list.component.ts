import { Component, OnInit, Input, NgModule } from '@angular/core';
import { User } from '../user';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { UserPost } from '../user-post';
import { UserPostService } from '../user-post.service';
import { UserService } from '../user.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { Source } from 'webpack-sources';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  providers: [UserService]
})
@NgModule({
  providers: [UserPostService]
})
export class PostsListComponent implements OnInit {

  @Input() userId: string;
  @Input() source: string = "";
  postsList: UserPost[] = [];
  likeUnlikeData = {
    userId: '',
    postId: ''
  }
  constructor(private userPostService: UserPostService, private userService: UserService) { }

  ngOnInit() {
    console.log(this.userId + "from post list");
    let timer = Observable.timer(1000, 5000);
    timer.subscribe(() => {
      if (this.userPostService.getRefreshNeed()) {
        this.displayUserPosts();
        this.userPostService.setRefreshNeed(false);
      }
    });
    // this.userPostService.refreshNeeded$.subscribe(()=>{
    //   this.displayUserPosts();
    // })
    this.displayUserPosts();

  }

  displayUserPosts() {
    this.postsListByUserId();
    if (this.source != "userProfile") { this.postsListByFollowingIds() };            
  }

  setClasses(){   
    this.postsList.forEach(post => {
      if(post.likes.length<=0)
      {
        post.class = "far fa-heart";
      }
      post.likes.forEach(id => {
        if (id == this.userService.getUserPayload().userId) {
          post.class = "fas fa-heart";
        }
        else {
          post.class = "far fa-heart";
        }
      });

    });
  }

  likeUnlikeClicked(post: UserPost) {
    this.likeUnlikeData.userId = this.userService.getUserPayload().userId;
    this.likeUnlikeData.postId = post._id;

    this.userPostService.likeUnlike(this.likeUnlikeData).subscribe((data: any) => {
      if (data.status == "success") {   
        // this.postsList.length=0;
        // this.displayUserPosts();       
        this.postsList.find(item=>item._id==post._id).likes=data.data.likes;  
        this.setClasses();       
      }
    })
    // this.userPostService.likeUnlike(this.likeUnlikeData);

  }

  // postExecuteGetUserByIdForPostList(data:any)
  // {

  // }
  postsListByUserId() {
    // this.userPostService.getPostsByUserId(this.userService.getUserPayload().userId).subscribe(data => {
    this.userPostService.getPostsByUserId(this.userId).subscribe(data => {
      this.postExecutePostsListByUserId(data);
    })
  }
  postExecutePostsListByUserId(data: any) {
    // this.postsList = data.data;
    data.data.forEach(userPost => {

      this.userService.getUserByIdParam(userPost.userId).subscribe((data: any) => {
        userPost.user = data.data;
      })

      this.postsList.push(userPost);
      this.setClasses();
    });
  }


  postsListByFollowingIds() {
    // this.userPostService.getPostsByFollowingIds(this.userService.getUserPayload().userId).subscribe(data => {
    this.userPostService.getPostsByFollowingIds(this.userId).subscribe(data => {
      this.postExecutePostsListByFollowignIds(data);
    })

   
  }
  postExecutePostsListByFollowignIds(data: any) {
    data.data.forEach(userPost => {

      this.userService.getUserByIdParam(userPost.userId).subscribe((data: any) => {
        console.log(data);
        userPost.user = data.data;
      })

      this.postsList.push(userPost);
    });
    this.postsList.sort((val1, val2) => {
      return <any>new Date(val2.datePosted).getTime() - <any>new
        Date(val1.datePosted).getTime()
    })    
    this.setClasses();
  }
}
