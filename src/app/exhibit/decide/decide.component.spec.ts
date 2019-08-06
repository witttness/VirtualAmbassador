import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DECIDEComponent } from './decide.component';

describe('DECIDEComponent', () => {
  let component: DECIDEComponent;
  let fixture: ComponentFixture<DECIDEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DECIDEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DECIDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
