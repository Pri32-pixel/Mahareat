import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNewComponent } from './about-new.component';

describe('AboutNewComponent', () => {
  let component: AboutNewComponent;
  let fixture: ComponentFixture<AboutNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutNewComponent]
    });
    fixture = TestBed.createComponent(AboutNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
