import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.css']
})
export class SinglePostsComponent implements OnInit {

  postData : any;
  similarPostArray : Array<object> = [];
  constructor(
    private route : ActivatedRoute,
    private postService : PostsService
    )
    {}

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.postService.countViews(val['id']);
      this.postService.loadSinglePost(val['id']).subscribe(p => {
        this.postData = p;
        this.loadSimilarPosts(this.postData.category.categoryId);
      })
    })
  }

  public loadSimilarPosts(categoryId : string){
    this.postService.loadSimilarPosts(categoryId).subscribe(val => {
      this.similarPostArray = val;
    })
  }

}
