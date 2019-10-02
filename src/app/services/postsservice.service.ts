
import { Injectable } from '@angular/core';
import{HttpClient , HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import {posts} from '../models/posts'
import { $$ } from 'protractor';

const httpoptions =
{
 headers: new HttpHeaders({'contentType':'application/json'})
}

@Injectable()
export class PostsserviceService {

  posturl: string='https://jsonplaceholder.typicode.com/posts/';
  constructor(private _Httpclient:HttpClient) { 

    
  }

  getposts():Observable<posts[]>
    {
        return this._Httpclient.get<posts[]>(this.posturl);
    }

    savepost(posts:posts):Observable<posts>
    {
      return this._Httpclient.post<posts>(this.posturl, posts,httpoptions);
    }

    
    updatepost(posts:posts):Observable<posts>

    {
      const url = `${this.posturl}/${posts.id}`; //const url carry the url + id of the edited post
      return this._Httpclient.put<posts>(url, posts,httpoptions); 
    }

    removepost(post:posts | number):Observable<posts>
    {
      const id = typeof post === 'number' ? post : post.id;
      const url = `${this.posturl}/${id}`;
      return this._Httpclient.delete<posts>(url,httpoptions); 


    }
  }