import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-scarcity',
  templateUrl: './scarcity.component.html',
  styleUrls: ['./scarcity.component.scss']
})
export class SCARCITYComponent implements OnInit {

  constructor(private svc: MyService) { }

  ngOnInit() {
  }

  rateExhibit(e) {
    console.info('rate exhibit', e);
    this.svc.saveRating('SCARCITY', e.rating);
  }
}
