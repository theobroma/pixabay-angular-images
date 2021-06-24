import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentExampleComponent } from './dialog-content-example.component';

describe('DialogContentExampleComponent', () => {
  let component: DialogContentExampleComponent;
  let fixture: ComponentFixture<DialogContentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
