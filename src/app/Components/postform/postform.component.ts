
import { Component, OnInit ,EventEmitter, Output , Input } from '@angular/core';
import {PostsserviceService} from '../../services/postsservice.service';

import {posts} from '../../models/posts'


@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

@Output() newpost: EventEmitter<posts> = new EventEmitter(); //output event emitter to add a new post
@Output() updatedpost: EventEmitter<posts> = new EventEmitter(); 
@Input()  currentpost: posts;
@Input() isedit: boolean = false;


  constructor(private _postserviceService:PostsserviceService) { }

  ngOnInit() {
  }

addpost(title:string , body:string)
{
  if(!title || !body)
 
   alert('please enter title and body')
 
 else{
  this._postserviceService.savepost({title , body} as posts).subscribe( posts =>{
    
  this.newpost.emit(posts);
 })
}
}

updatepost()
{
  this._postserviceService.updatepost(this.currentpost).subscribe
  (posts=>{
    console.log(posts); 
    this.isedit=false;
    this.updatedpost.emit(posts);
    this.currentpost={
      id: 0,
      title: '',
      body: '',

    }
  
  
  })
}

}