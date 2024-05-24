import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotableJudgementComponent } from './notable-judgement.component';

describe('NotableJudgementComponent', () => {
  let component: NotableJudgementComponent;
  let fixture: ComponentFixture<NotableJudgementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotableJudgementComponent]
    });
    fixture = TestBed.createComponent(NotableJudgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
