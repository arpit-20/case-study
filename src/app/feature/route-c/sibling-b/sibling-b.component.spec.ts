import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingBComponent } from './sibling-b.component';

describe('SiblingBComponent', () => {
  let component: SiblingBComponent;
  let fixture: ComponentFixture<SiblingBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
