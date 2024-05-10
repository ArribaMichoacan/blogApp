import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

import firebase from '@firebase/app-compat'

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(private afs : AngularFirestore) { }


  //obtener los posts guardados en bd
  public loadFeaturedPosts(){
    //vamos a obtener los posts marcados como relevantes o featured
    return this.afs.collection('posts',ref=> ref.where('isFeatured','==',true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
  }

  public loadLatestPosts(){
    return this.afs.collection('posts',ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
  }

  public loadCategoryPosts(categoryId : string){
    return this.afs.collection('posts',ref => ref.where('category.categoryId','==',categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return  {id,data};
        })
      })
    )

  }


  public loadSinglePost(postId : string){

    return this.afs.doc(`posts/${postId}`).valueChanges();

  }

  public loadSimilarPosts(categoryId : string){
    return this.afs.collection('posts',ref => ref.where('category.categoryId','==',categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a=> {

          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }

  public countViews(postId : string){
    const viewCount = {
      views : firebase.firestore.FieldValue.increment(1)
    }
    this.afs.doc(`posts/${postId}`).update(viewCount).then(() => {
      console.log('views count updated')
    });
  }

}
