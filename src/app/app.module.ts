import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FormsPageComponent } from "./forms-page/forms-page.component";
import { ContentComponent } from "./content/content.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { NetworkRequestsPageComponent } from "./network-requests-page/network-requests-page.component";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PopupComponent } from "./popup/popup.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    FormsPageComponent,
    ContentComponent,
    ListPageComponent,
    NetworkRequestsPageComponent,
    PopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
