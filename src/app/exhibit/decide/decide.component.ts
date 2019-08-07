import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-decide',
  templateUrl: './decide.component.html',
  styleUrls: ['./decide.component.scss']
})
export class DECIDEComponent implements OnInit {

  constructor(private svc: MyService) { }

  ngOnInit() {
  }

  rateExhibit(e) {
    console.info('rate exhibit', e);
    this.svc.saveRating('DECIDE', e.rating);
  }
}
