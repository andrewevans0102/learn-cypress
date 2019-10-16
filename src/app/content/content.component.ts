import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  goToListPage() {
    this.router.navigateByUrl('/list-page');
  }

  goToFormPage() {
    this.router.navigateByUrl('/form-page');
  }
}
