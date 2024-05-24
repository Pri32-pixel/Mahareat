import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizalChartComponent } from './organizal-chart.component';

describe('OrganizalChartComponent', () => {
  let component: OrganizalChartComponent;
  let fixture: ComponentFixture<OrganizalChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizalChartComponent]
    });
    fixture = TestBed.createComponent(OrganizalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
