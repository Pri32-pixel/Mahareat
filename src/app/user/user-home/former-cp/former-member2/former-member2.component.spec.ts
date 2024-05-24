import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerMember2Component } from './former-member2.component';

describe('FormerMember2Component', () => {
  let component: FormerMember2Component;
  let fixture: ComponentFixture<FormerMember2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormerMember2Component]
    });
    fixture = TestBed.createComponent(FormerMember2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
