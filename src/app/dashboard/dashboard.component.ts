import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // logout()
  // {
  //   localStorage.removeItem("token");
  //   this.router.navigateByUrl("/login");
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
