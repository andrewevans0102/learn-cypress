import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import axios from "axios";

@Component({
  selector: "app-network-requests-page",
  templateUrl: "./network-requests-page.component.html",
  styleUrls: ["./network-requests-page.component.scss"],
})
export class NetworkRequestsPageComponent implements OnInit {
  selectedMovie: string = "";
  movieData: any;
  constructor(public router: Router) {}

  ngOnInit() {}

  async showDetails() {
    try {
      // pull out movie for API call
      const split = this.selectedMovie.split(" ");
      const film = split[split.length - 1].substring(1, 2);
      const response = await axios.get(`https://swapi.dev/api/films/${film}/`);
      this.movieData = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  goToContentPage() {
    this.router.navigateByUrl("/content");
  }
}
