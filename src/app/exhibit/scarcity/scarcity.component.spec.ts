import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCARCITYComponent } from './scarcity.component';

describe('SCARCITYComponent', () => {
  let component: SCARCITYComponent;
  let fixture: ComponentFixture<SCARCITYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCARCITYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCARCITYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
