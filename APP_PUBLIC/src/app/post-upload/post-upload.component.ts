import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { UserPostService } from '../user-post.service';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { UserService } from '../user.service';
import { User } from '../user';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-upload',
  templateUrl: './post-upload.component.html',
  styleUrls: ['./post-upload.component.css'],
  providers: [UserPostService, UserService, PostsListComponent]
})
export class PostUploadComponent implements OnInit {

  // @ViewChild(PostsListComponent, { static: false })
  @Input() user: User;
  captionInput: HTMLInputElement;
  captionInputWithMedia: HTMLInputElement;
  mediaInput: HTMLInputElement;
  postData = {
    userId: '',
    caption: ''
  }
  constructor(private elementRef: ElementRef, private router: Router, private postListComponent: PostsListComponent, private userPostServive: UserPostService, private userService: UserService) { }

  ngOnInit() {
  }

  createPost() {
    this.captionInput = this.elementRef.nativeElement.querySelector("#caption");

    if (this.captionInput.value == "") {
      alert("Please write something");
    }
    else {
      // this.postData.userId = this.user._id;
      this.postData.userId = this.userService.getUserPayload().userId;
      this.postData.caption = this.captionInput.value;

      this.userPostServive.createpost(this.postData).subscribe(data => {
        this.postExecuteCreatePost(data);
      })
    }
  }

  postExecuteCreatePost(data: any) {
    if (data.status == "error") {
      alert(data.msg);
    }
    else {
      alert("posted");
      this.captionInput.value = "";
      // debugger
      // this.router.navigate(['home']);
      this.postListComponent.displayUserPosts();
    }
  }

  createPostWithMedia() {
    this.captionInputWithMedia = this.elementRef.nativeElement.querySelector("#captionMedia");
    this.mediaInput = this.elementRef.nativeElement.querySelector("#media");
    let formData = new FormData();
    if (this.captionInputWithMedia.value == "") {
      alert("Please write something");
    }
    else if (this.mediaInput.files.length <= 0) {
      alert("Please slect any media");
    }
    else {
      formData.append('media', this.mediaInput.files.item(0));
      // formData.append('userId', this.user._id);
      formData.append('userId', this.userService.getUserPayload().userId);
      formData.append('caption', this.captionInputWithMedia.value);

      this.userPostServive.createpostWithMedia(formData).subscribe(data => {
        this.postExecuteCreatePostWithMedia(data);
      })
    }
  }

  postExecuteCreatePostWithMedia(data: any) {
    if (data.status == "error") {
      alert(data.msg);
    }
    else {
      alert("posted");
      this.captionInputWithMedia.value = "";
      this.mediaInput.value = "";
    }
  }
}
