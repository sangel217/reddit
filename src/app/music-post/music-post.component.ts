import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-music-post',
  templateUrl: './music-post.component.html',
  styleUrls: ['./music-post.component.css'],
  providers: [PostService]
})
export class MusicPostComponent implements OnInit {
  postId: string;
  postToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
  }
}
