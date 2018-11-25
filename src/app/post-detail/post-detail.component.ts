import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  constructor() {
    this.post = new Post();
    this.post.id = '1';
    this.post.title = 'Title Here';
    this.post.image = 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png';
    this.post.content = 'Content is here';
  }

  ngOnInit() {
  }

}
