import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Member2PopupComponent } from './member2-popup.component';

describe('Member2PopupComponent', () => {
  let component: Member2PopupComponent;
  let fixture: ComponentFixture<Member2PopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Member2PopupComponent]
    });
    fixture = TestBed.createComponent(Member2PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
