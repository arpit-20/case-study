import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingCComponent } from './sibling-c.component';

describe('SiblingCComponent', () => {
  let component: SiblingCComponent;
  let fixture: ComponentFixture<SiblingCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
