import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCpComponent } from './about-cp.component';

describe('AboutCpComponent', () => {
  let component: AboutCpComponent;
  let fixture: ComponentFixture<AboutCpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCpComponent]
    });
    fixture = TestBed.createComponent(AboutCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
