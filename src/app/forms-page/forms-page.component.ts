import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PopupComponent } from "../popup/popup.component";

@Component({
  selector: "app-forms-page",
  templateUrl: "./forms-page.component.html",
  styleUrls: ["./forms-page.component.scss"],
})
export class FormsPageComponent implements OnInit {
  email: string = "";
  password: string = "";
  constructor(public router: Router, private modalService: NgbModal) {}

  ngOnInit() {}

  onSubmit() {
    if (this.email === undefined || this.email === "") {
      this.showMessage("please enter a email");
      return;
    }
    if (this.password === undefined || this.password === "") {
      this.showMessage("please enter a password");
      return;
    }

    // email and password entered so show success
    this.success();
  }

  showMessage(messageContent: string) {
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.message = messageContent;
  }

  success() {
    this.showMessage("login successful");
    this.router.navigateByUrl("/content");
  }

  goToContentPage() {
    this.router.navigateByUrl("/content");
  }
}
