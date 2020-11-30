import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumaratoareComponent } from './numaratoare.component';

describe('NumaratoareComponent', () => {
  let component: NumaratoareComponent;
  let fixture: ComponentFixture<NumaratoareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumaratoareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumaratoareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
