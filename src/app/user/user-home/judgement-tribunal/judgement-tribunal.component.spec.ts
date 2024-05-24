import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgementTribunalComponent } from './judgement-tribunal.component';

describe('JudgementTribunalComponent', () => {
  let component: JudgementTribunalComponent;
  let fixture: ComponentFixture<JudgementTribunalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JudgementTribunalComponent]
    });
    fixture = TestBed.createComponent(JudgementTribunalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
