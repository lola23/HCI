import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediuComponent } from './mediu.component';

describe('MediuComponent', () => {
  let component: MediuComponent;
  let fixture: ComponentFixture<MediuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
