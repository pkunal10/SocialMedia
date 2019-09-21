import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FileSelectDirective} from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FrameWorkComponent } from './frame-work/frame-work.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { from } from 'rxjs';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import {UserService} from './user.service';
import { PostUploadComponent } from './post-upload/post-upload.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { SearchListComponent } from './search-list/search-list.component';

@NgModule({
  declarations: [
    FrameWorkComponent,
    UserRegisterComponent,
    HomeComponent,
    PostUploadComponent,
    PostsListComponent,
    SearchFilterPipe,
    SearchListComponent,
    //FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: UserRegisterComponent
        },
        {
          path: 'signup',
          component: UserRegisterComponent
        },
        {
          path: 'home',
          component: HomeComponent, canActivate: [AuthGuard]
        },
        {
          path: 'search/:searchTerm',
          component: SearchListComponent, canActivate: [AuthGuard]
        },
      ])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, AuthInterceptor,UserService],
  bootstrap: [FrameWorkComponent]
})
export class AppModule { }
