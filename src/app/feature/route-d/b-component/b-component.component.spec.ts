import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComponentComponent } from './b-component.component';

describe('BComponentComponent', () => {
  let component: BComponentComponent;
  let fixture: ComponentFixture<BComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
