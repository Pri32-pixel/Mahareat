import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActsComponent } from './acts.component';

describe('ActsComponent', () => {
  let component: ActsComponent;
  let fixture: ComponentFixture<ActsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActsComponent]
    });
    fixture = TestBed.createComponent(ActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
