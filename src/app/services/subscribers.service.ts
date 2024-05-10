import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({providedIn: 'root'})
export class SubscribersService {

  constructor(
    private afs : AngularFirestore,
    ) { }

  public addSubs(subData : any){
    this.afs.collection('subscribers').add(subData).then(() => {
      // se guardo exitosamente
    })
  }

  public checkUsers(email : string){
    return this.afs.collection('subscribers',ref => ref.where('email','==',email)).get();
  }

}
