import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfsComponent } from './wolfs.component';

describe('WolfsComponent', () => {
  let component: WolfsComponent;
  let fixture: ComponentFixture<WolfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
