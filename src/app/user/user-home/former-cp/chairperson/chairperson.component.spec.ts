import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairpersonComponent } from './chairperson.component';

describe('ChairpersonComponent', () => {
  let component: ChairpersonComponent;
  let fixture: ComponentFixture<ChairpersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChairpersonComponent]
    });
    fixture = TestBed.createComponent(ChairpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
