import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.scss"],
})
export class ListPageComponent implements OnInit {
  listValues = ["first item", "second item", "third item", "fourth item"];
  createValue: string = "";

  constructor(public router: Router) {}

  ngOnInit() {}

  delete(value: string) {
    const index = this.listValues.indexOf(value);
    if (index !== -1) {
      this.listValues.splice(index, 1);
    }
  }

  create() {
    this.listValues.push(this.createValue);
  }

  goToContentPage() {
    this.router.navigateByUrl("/content");
  }
}
