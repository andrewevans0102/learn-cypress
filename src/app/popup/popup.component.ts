import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"],
})
export class PopupComponent {
  @Input() message: string = "";

  constructor(public activeModal: NgbActiveModal) {}
}
