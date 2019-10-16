import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FormPageComponent } from './form-page/form-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent },
  { path: 'list-page', component: ListPageComponent },
  { path: 'form-page', component: FormPageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
