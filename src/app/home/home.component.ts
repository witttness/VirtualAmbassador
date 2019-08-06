import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../my.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private svc: MyService) { }

  ngOnInit() {
  }

  goToExhibitDemo() {
    setTimeout(() => {
      this.router.navigateByUrl("exh-SCARCITY");
    }, 10000);
  }

  startAnonymous() {
    this.svc.startAnonymousVisit();
    this.router.navigateByUrl("map");
  }
}
