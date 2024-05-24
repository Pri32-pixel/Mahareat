import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyofficialComponent } from './keyofficial.component';

describe('KeyofficialComponent', () => {
  let component: KeyofficialComponent;
  let fixture: ComponentFixture<KeyofficialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyofficialComponent]
    });
    fixture = TestBed.createComponent(KeyofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
