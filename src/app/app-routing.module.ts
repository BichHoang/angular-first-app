import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostAddComponent} from './post-add/post-add.component';
import {PostEditComponent} from './post-edit/post-edit.component';

const routes: Routes = [
  {path: 'postDetail', component: PostDetailComponent},
  {path: 'postList', component: PostListComponent},
  {path: 'postAdd', component: PostAddComponent},
  {path: 'postEdit/:id', component: PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
