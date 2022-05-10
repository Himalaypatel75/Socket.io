import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelOutrightComponent } from './del-outright.component';

describe('DelOutrightComponent', () => {
  let component: DelOutrightComponent;
  let fixture: ComponentFixture<DelOutrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelOutrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelOutrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
