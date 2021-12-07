import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DComponentComponent } from './d-component.component';

describe('DComponentComponent', () => {
  let component: DComponentComponent;
  let fixture: ComponentFixture<DComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
