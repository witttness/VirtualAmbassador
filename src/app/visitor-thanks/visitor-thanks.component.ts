import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-thanks',
  templateUrl: './visitor-thanks.component.html',
  styleUrls: ['./visitor-thanks.component.scss']
})
export class VisitorThanksComponent implements OnInit {
  data;

  constructor(private svc: MyService, private router: Router) {
    this.data = svc.visitorData;
  }

  ngOnInit() {
  }

  startVisit() {
    this.svc.startVisit();
    this.router.navigateByUrl('map')
  }
}
