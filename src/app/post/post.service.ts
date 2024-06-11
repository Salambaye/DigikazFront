import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { Post } from '../interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})

export class PostService {
  private apiHost = 'https://jsonplaceholder.typicode.com';
  private postsCache$?: Observable<Post[]>;


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {

    if (!this.postsCache$) {
      this.postsCache$ = this.http.get<Post[]>(`${this.apiHost}/posts`).pipe(
        shareReplay(1)
      )
    }
    return this.postsCache$;
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiHost}/posts`, post)

    tap(() => {
      this.postsCache$ = of([]);
    })
  }

}