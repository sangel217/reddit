import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [PostService]
})
export class MusicComponent implements OnInit {
  posts: Post[];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post){
    this.router.navigate(['posts', clickedPost.id]);
  };


}
