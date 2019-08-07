import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-get-group',
  templateUrl: './get-group.component.html',
  styleUrls: ['./get-group.component.scss']
})
export class GetGroupComponent implements OnInit {
  group: string;

  constructor(private router: Router, private svc: MyService) {
    this.group = svc.visitorData.group;
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('visitorInfo/getAge');
  }

  goNext() {
    this.svc.setVisitorGroup(this.group);
    this.router.navigateByUrl('visitorInfo/getEducation');
  }

}
