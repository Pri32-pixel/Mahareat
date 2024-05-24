import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Member1PopupComponent } from './member1-popup.component';

describe('Member1PopupComponent', () => {
  let component: Member1PopupComponent;
  let fixture: ComponentFixture<Member1PopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Member1PopupComponent]
    });
    fixture = TestBed.createComponent(Member1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
