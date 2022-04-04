import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptWolfComponent } from './adopt-wolf.component';

describe('AdoptWolfComponent', () => {
  let component: AdoptWolfComponent;
  let fixture: ComponentFixture<AdoptWolfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptWolfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptWolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
