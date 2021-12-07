import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingAComponent } from './sibling-a.component';

describe('SiblingAComponent', () => {
  let component: SiblingAComponent;
  let fixture: ComponentFixture<SiblingAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
