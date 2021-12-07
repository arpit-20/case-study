import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDComponent } from './route-d.component';

describe('RouteDComponent', () => {
  let component: RouteDComponent;
  let fixture: ComponentFixture<RouteDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
