import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LimbaComponent} from './limba.component';

describe('LimbaComponent', () => {
  let component: LimbaComponent;
  let fixture: ComponentFixture<LimbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LimbaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
