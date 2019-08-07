import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-get-zip',
  templateUrl: './get-zip.component.html',
  styleUrls: ['./get-zip.component.scss']
})
export class GetZipComponent implements OnInit {
  zip: string;

  constructor(private router: Router, private svc: MyService) {
    this.zip = svc.visitorData.zip;
   }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/');
  }

  goNext() {
    this.svc.setVisitorZip(this.zip);
    this.router.navigateByUrl('visitorInfo/getAge');
  }
}
