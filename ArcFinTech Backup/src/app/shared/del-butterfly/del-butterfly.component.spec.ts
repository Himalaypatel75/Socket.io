import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelButterflyComponent } from './del-butterfly.component';

describe('DelButterflyComponent', () => {
  let component: DelButterflyComponent;
  let fixture: ComponentFixture<DelButterflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelButterflyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelButterflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
