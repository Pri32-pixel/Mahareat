import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseListNewComponent } from './cause-list-new.component';

describe('CauseListNewComponent', () => {
  let component: CauseListNewComponent;
  let fixture: ComponentFixture<CauseListNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CauseListNewComponent]
    });
    fixture = TestBed.createComponent(CauseListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
