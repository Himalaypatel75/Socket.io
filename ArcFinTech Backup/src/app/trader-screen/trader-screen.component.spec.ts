import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderScreenComponent } from './trader-screen.component';

describe('TraderScreenComponent', () => {
  let component: TraderScreenComponent;
  let fixture: ComponentFixture<TraderScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
