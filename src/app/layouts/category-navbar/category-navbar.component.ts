import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {

  public categoryArray : Array<any> = new Array<any>;
  constructor(private categoriesService : CategoriesService){}

  ngOnInit(): void {
    //cargamos las categorias desde firestore y las guardamos en el array
    //este array es el que se muestra en la pagina principal
   this.categoriesService.loadData().subscribe(val => {
     this.categoryArray = val;
   })
  }

}
