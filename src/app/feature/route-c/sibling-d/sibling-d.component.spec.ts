import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingDComponent } from './sibling-d.component';

describe('SiblingDComponent', () => {
  let component: SiblingDComponent;
  let fixture: ComponentFixture<SiblingDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
