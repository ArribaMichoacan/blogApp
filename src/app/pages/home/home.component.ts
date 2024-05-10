import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public featuredPostsArray: Array<object> = [];
  public latesPostsArray: Array<object> = [];

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    //carga los posts marcados como destacados
    this.postService.loadFeaturedPosts().subscribe(val => {
      this.featuredPostsArray = val;
    });

    //carga los ultimos posts publicados
    this.postService.loadLatestPosts().subscribe(val2 => {
      this.latesPostsArray = val2;
    });

  }

}
