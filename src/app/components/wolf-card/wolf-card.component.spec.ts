import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfCardComponent } from './wolf-card.component';

describe('WolfCardComponent', () => {
  let component: WolfCardComponent;
  let fixture: ComponentFixture<WolfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolfCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
