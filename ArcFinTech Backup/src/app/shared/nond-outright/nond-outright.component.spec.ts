import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NondOutrightComponent } from './nond-outright.component';

describe('NondOutrightComponent', () => {
  let component: NondOutrightComponent;
  let fixture: ComponentFixture<NondOutrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NondOutrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NondOutrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
