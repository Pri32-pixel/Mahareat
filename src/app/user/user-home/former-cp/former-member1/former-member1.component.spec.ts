import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerMember1Component } from './former-member1.component';

describe('FormerMember1Component', () => {
  let component: FormerMember1Component;
  let fixture: ComponentFixture<FormerMember1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormerMember1Component]
    });
    fixture = TestBed.createComponent(FormerMember1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
