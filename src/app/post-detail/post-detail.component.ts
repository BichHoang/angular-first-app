import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post';
import {PostService} from '../post.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  constructor(private postService: PostService,
              private location: Location) {
    this.post = new Post();
  }

  ngOnInit() {
  }
  delete() {
    this.postService.DeletePost(this.post.id).subscribe(
      result => {
        window.location.reload();
      }, error1 => {
        alert('fail');
      }
    );
  }

}
