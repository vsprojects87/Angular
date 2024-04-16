import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Ipost } from '../models/ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  providers: [PostService]
})
export class PostComponent {

  posts : Array<any> = [];

constructor(private postService:PostService) {
  // above variable postService getting the functionality of PostService class via dependancy injection
  this.posts=postService.postList;

  // this is direct way of creating instance of postservice class but not a best practice since we will have to be dependant on that class object 
  // let postService = new PostService();
  // // assigning postlist of service to local array posts
  // this.posts = postService.postList;
}

addNewDataToService(){ 
  let newPost : Ipost  = {
    id:6, post : "post6"
  } 
  // since we have injected service we are accessing that service and passing the data to function of PostService on button click of postcomponent
  this.postService.addPost(newPost);
}

}

// we have inherited interface Ipost , the main purpose is that variables inside PostService method are case sensitive and we need to define the variable name same as mention in PostService , in such case if we have variable interacting with database we may make spelling mistake and it wont give any result
// for that purpose we are declaring the variable use in PostService inside Ipost Interface and we can inherit the interface so it will tell the above 'newpost' list to define variable according to Ipost interface since we are using same variable as PostService
// interface will generate error if we do any spelling mistake
