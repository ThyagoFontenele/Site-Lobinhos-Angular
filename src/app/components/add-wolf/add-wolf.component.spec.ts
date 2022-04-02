import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWolfComponent } from './add-wolf.component';

describe('AddWolfComponent', () => {
  let component: AddWolfComponent;
  let fixture: ComponentFixture<AddWolfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWolfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
