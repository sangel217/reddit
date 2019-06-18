import { Post } from '../post.model';
import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PostService]
})
export class AdminComponent {

  constructor(private postService: PostService) { }

  submitForm(title: string, author: string, date: string, content: string) {
    var newPost: Post = new Post(title, author, new Date(date), content);
    this.postService.addPost(newPost);
  }

}
