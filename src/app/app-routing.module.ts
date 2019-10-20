import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsPageComponent } from './forms-page/forms-page.component';
import { ContentComponent } from './content/content.component';
import { ListPageComponent } from './list-page/list-page.component';
import { NetworkRequestsPageComponent } from './network-requests-page/network-requests-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'forms-page', component: FormsPageComponent },
  { path: 'content', component: ContentComponent },
  { path: 'list-page', component: ListPageComponent },
  { path: 'network-requests-page', component: NetworkRequestsPageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
