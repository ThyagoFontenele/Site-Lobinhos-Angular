import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWolvesPageComponent } from './our-wolves-page.component';

describe('OurWolvesPageComponent', () => {
  let component: OurWolvesPageComponent;
  let fixture: ComponentFixture<OurWolvesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWolvesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWolvesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
