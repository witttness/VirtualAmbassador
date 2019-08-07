import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorThanksComponent } from './visitor-thanks.component';

describe('VisitorThanksComponent', () => {
  let component: VisitorThanksComponent;
  let fixture: ComponentFixture<VisitorThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
