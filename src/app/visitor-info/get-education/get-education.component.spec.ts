import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEducationComponent } from './get-education.component';

describe('GetEducationComponent', () => {
  let component: GetEducationComponent;
  let fixture: ComponentFixture<GetEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
