import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public basePath: string = 'http://jsonplaceholder.typicode.com';

  constructor(protected httpClient: HttpClient) {}

  async getPostList(): Promise<Post[]> {
    return await this.httpClient
      .get<Post[]>(`${this.basePath}/posts`)
      .toPromise()
      .then(posts => posts ?? [<Post>{}]);
  }

  async getSpecificPost(postId: string): Promise<Post> {
    return await this.httpClient
      .get<Post>(`${this.basePath}/posts/${postId}`)
      .toPromise()
      .then(post => post ?? <Post>{});
  }
}
