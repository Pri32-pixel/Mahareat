import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMaharetaComponent } from './about-mahareta.component';

describe('AboutMaharetaComponent', () => {
  let component: AboutMaharetaComponent;
  let fixture: ComponentFixture<AboutMaharetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMaharetaComponent]
    });
    fixture = TestBed.createComponent(AboutMaharetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
