import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogGresealaComponent} from './dialog-greseala.component';

describe('DialogGresealaComponent', () => {
  let component: DialogGresealaComponent;
  let fixture: ComponentFixture<DialogGresealaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogGresealaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGresealaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
