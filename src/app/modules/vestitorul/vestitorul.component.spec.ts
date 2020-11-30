import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestitorulComponent } from './vestitorul.component';

describe('VestitorulComponent', () => {
  let component: VestitorulComponent;
  let fixture: ComponentFixture<VestitorulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestitorulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestitorulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
