import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.scss']
})
export class ExhibitComponent implements OnInit {
  exhibitId$: Observable<string>;

  constructor(private route: ActivatedRoute) {
    this.exhibitId$ = route.params.pipe(map(p => p.exhibitId));
  }

  ngOnInit() {
  }

}
