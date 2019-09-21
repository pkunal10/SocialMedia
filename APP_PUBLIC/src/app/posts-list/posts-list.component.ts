import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { UserPost } from '../user-post';
import { UserPostService } from '../user-post.service';
import { UserService } from '../user.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  providers: [UserPostService, UserService]
})
export class PostsListComponent implements OnInit {

  @Input() user: User;
  postsList: [UserPost];
  constructor(private userPostService: UserPostService, private userService: UserService) { }

  ngOnInit() {
    console.log(this.user + "from post list");
    this.displayUserPosts();

  }

  displayUserPosts() {
    this.postsListByUserId();
  }

  postsListByUserId() {
    // this.userPostService.getPostsByUserId(this.user._id).subscribe(data => {
      this.userPostService.getPostsByUserId(this.userService.getUserPayload().userId).subscribe(data => {
      this.postExecutePostsListByUserId(data);
    })
  }
  postExecutePostsListByUserId(data: any) {
    this.postsList = data.data;

  }
}
