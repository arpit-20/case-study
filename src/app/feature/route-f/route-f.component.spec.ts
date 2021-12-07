import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFComponent } from './route-f.component';

describe('RouteFComponent', () => {
  let component: RouteFComponent;
  let fixture: ComponentFixture<RouteFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
