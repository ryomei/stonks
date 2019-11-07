import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCallToActionComponent } from './btn-call-to-action.component';

describe('BtnCallToActionComponent', () => {
  let component: BtnCallToActionComponent;
  let fixture: ComponentFixture<BtnCallToActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCallToActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
