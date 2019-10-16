import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  constructor(public router: Router) {}

  ngOnInit() {
    this.submitted = false;
  }

  onSubmit() {
    // console.log('test');
    // this.submitted = true;
    this.router.navigateByUrl('/content');
  }
}
