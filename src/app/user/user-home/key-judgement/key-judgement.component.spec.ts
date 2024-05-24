import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyJudgementComponent } from './key-judgement.component';

describe('KeyJudgementComponent', () => {
  let component: KeyJudgementComponent;
  let fixture: ComponentFixture<KeyJudgementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyJudgementComponent]
    });
    fixture = TestBed.createComponent(KeyJudgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
