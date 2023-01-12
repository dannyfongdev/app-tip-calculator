import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerPersonCardComponent } from './per-person-card.component';

describe('PerPersonCardComponent', () => {
  let component: PerPersonCardComponent;
  let fixture: ComponentFixture<PerPersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerPersonCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
