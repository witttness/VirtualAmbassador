import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-get-age',
  templateUrl: './get-age.component.html',
  styleUrls: ['./get-age.component.scss']
})
export class GetAgeComponent implements OnInit {
age: string;

constructor(private router: Router, private svc: MyService) { 
  this.age = svc.visitorData.age;
}

ngOnInit() {
}

goBack() {
  this.router.navigateByUrl('visitorInfo/getZip');
}

goNext() {
  this.svc.setVisitorAge(this.age);
  this.router.navigateByUrl('visitorInfo/getGroup');
}

}
