import { Component, OnInit } from '@angular/core';
import { PostsserviceService } from '../../services/postsservice.service';
import { posts } from '../../models/posts'




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: posts[];
  currentpost: posts = {
    id: 0,
    title: '',
    body: '',
  }
  isedit: boolean = false;
  constructor(private _postserviceService: PostsserviceService) { }

  ngOnInit() {
    this._postserviceService.getposts().subscribe(posts => {
      this.posts = posts;

    })

  }
  //add new post
  onnewpost(post: posts) {
    this.posts.unshift(post);
  }

  editpost(post: posts) {
    this.currentpost = post;
    this.isedit = true;

  }
  //this function to allow user to update the data many times 
  onupdatedpost(post: posts) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isedit = false;
        this.currentpost = {
          id: 0,
          title: ' ',
          body: ' '

        }
      }
    })
  }
  /* onKeydown(event) {
     console.log(event);
     console.log('hamdaa');
   }*/
  removepost(post: posts) {
    if (confirm('Are you you want to delete this post?')) {
      this._postserviceService.removepost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (post.id === cur.id) {
            this.posts.splice(index, 1);

          }

        })

      })
    }
  }
}
