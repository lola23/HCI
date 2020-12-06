import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogCorectComponent} from './dialog-corect.component';

describe('DialogCorectComponent', () => {
  let component: DialogCorectComponent;
  let fixture: ComponentFixture<DialogCorectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogCorectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCorectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
