import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAgeComponent } from './get-age.component';

describe('GetAgeComponent', () => {
  let component: GetAgeComponent;
  let fixture: ComponentFixture<GetAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
