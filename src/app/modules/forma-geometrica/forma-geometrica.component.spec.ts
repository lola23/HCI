import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaGeometricaComponent } from './forma-geometrica.component';

describe('FormaGeometricaComponent', () => {
  let component: FormaGeometricaComponent;
  let fixture: ComponentFixture<FormaGeometricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaGeometricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaGeometricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
