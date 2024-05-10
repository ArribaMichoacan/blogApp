import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { single } from 'rxjs';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostsComponent } from './pages/single-posts/single-posts.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ErrorPage404Component } from './pages/error-page404/error-page404.component';

const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'category/:category/:id', component : SingleCategoryComponent},
  {path : 'post/:id', component : SinglePostsComponent},


  {path : 'about', component : AboutUsComponent},
  {path : 'term-conditions', component : TermsAndConditionsComponent},
  {path : 'contact', component : ContactUsComponent},

  {path : '404', component : ErrorPage404Component},
  {path : '**', redirectTo : '404'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
