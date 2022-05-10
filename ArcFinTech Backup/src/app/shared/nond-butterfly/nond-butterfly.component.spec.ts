import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NondButterflyComponent } from './nond-butterfly.component';

describe('NondButterflyComponent', () => {
  let component: NondButterflyComponent;
  let fixture: ComponentFixture<NondButterflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NondButterflyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NondButterflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
