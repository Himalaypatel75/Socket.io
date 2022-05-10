import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelSwapComponent } from './del-swap.component';

describe('DelSwapComponent', () => {
  let component: DelSwapComponent;
  let fixture: ComponentFixture<DelSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelSwapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
