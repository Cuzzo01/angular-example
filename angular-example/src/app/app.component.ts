import { Component } from '@angular/core';
import { Coffee } from './models/Coffee';
import { Post } from './models/Post';
import { CoffeeService } from './services/coffee-service.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-example';

  public hasCoffee: boolean = false;
  public coffee: Coffee = {};

  public hasPosts: boolean = false;
  public postList: Post[] = [];

  constructor(protected coffeeService: CoffeeService, protected postService: PostService) {}

  async getCoffee() {
    this.coffee = await this.coffeeService.getNewCoffee();
    this.hasCoffee = true;
  }

  async getPostList() {
    this.postList = await this.postService.getPostList();
    this.hasPosts = true;
  }

  async getSpecificPost(postId: string) {
    const newPost = await this.postService.getSpecificPost(postId);
    this.postList = [newPost];
    this.hasPosts = true;
  }
}
