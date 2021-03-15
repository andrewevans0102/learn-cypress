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

  goToNetworkRequestsPage() {
    this.router.navigateByUrl('/network-requests-page');
  }

  goToFormsPage() {
    this.router.navigateByUrl('/forms-page');
  }
}
