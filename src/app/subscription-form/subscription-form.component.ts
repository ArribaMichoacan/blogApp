import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub.interface';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent  {


  public isEmailError : boolean = false;
  public isUserSubscribed : boolean = false;
  constructor(private subService : SubscribersService){}

  public onSubmit(formVal : any){

    const subData : Sub = {
      name : formVal.name,
      email : formVal.email
    }

    //this.subService.addSubs(subData);

    this.subService.checkUsers(subData.email).subscribe(val => {
      if(val.empty){
        this.subService.addSubs(subData);
        this.isUserSubscribed = true;
      }else{
        this.isEmailError=true;
      }
    })

  }

}
