import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post: Post;
  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) {
    this.post = new Post();
  }

  ngOnInit() {
    this.getPost();
  }
  EditPost() {
    this.postService.EditPost(this.post).subscribe(
      result => {
        this.router.navigate(['/postList']);
      }, error2 => {
        alert('failed');
      }
    );
  }
  getPost() {
    const id = this.route.snapshot.params['id'];
    this.postService.getPostByID(id).subscribe(
      result => {
        this.post = result;
      }, error2 => {
        alert('failed');
      }
    );
  }
}
