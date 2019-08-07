import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-get-education',
  templateUrl: './get-education.component.html',
  styleUrls: ['./get-education.component.scss']
})
export class GetEducationComponent implements OnInit {
education: string;

constructor(private router: Router, private svc: MyService) { 
  this.education = svc.visitorData.education;
}

ngOnInit() {
}

goBack() {
  this.router.navigateByUrl('visitorInfo/getGroup');
}

goNext() {
  this.svc.setVisitorEducation(this.education);
  this.router.navigateByUrl('thanks');
}
}
