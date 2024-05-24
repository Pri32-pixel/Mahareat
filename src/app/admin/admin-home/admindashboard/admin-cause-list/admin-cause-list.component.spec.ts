import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCauseListComponent } from './admin-cause-list.component';

describe('AdminCauseListComponent', () => {
  let component: AdminCauseListComponent;
  let fixture: ComponentFixture<AdminCauseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCauseListComponent]
    });
    fixture = TestBed.createComponent(AdminCauseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
