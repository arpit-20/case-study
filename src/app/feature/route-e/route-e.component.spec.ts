import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteEComponent } from './route-e.component';

describe('RouteEComponent', () => {
  let component: RouteEComponent;
  let fixture: ComponentFixture<RouteEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
