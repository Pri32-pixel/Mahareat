import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerCpComponent } from './former-cp.component';

describe('FormerCpComponent', () => {
  let component: FormerCpComponent;
  let fixture: ComponentFixture<FormerCpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormerCpComponent]
    });
    fixture = TestBed.createComponent(FormerCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
