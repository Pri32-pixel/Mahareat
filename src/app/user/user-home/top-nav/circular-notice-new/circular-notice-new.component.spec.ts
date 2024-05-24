import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularNoticeNewComponent } from './circular-notice-new.component';

describe('CircularNoticeNewComponent', () => {
  let component: CircularNoticeNewComponent;
  let fixture: ComponentFixture<CircularNoticeNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularNoticeNewComponent]
    });
    fixture = TestBed.createComponent(CircularNoticeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
