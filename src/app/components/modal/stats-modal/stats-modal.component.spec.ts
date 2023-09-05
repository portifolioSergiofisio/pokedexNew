import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsModalComponent } from './stats-modal.component';

describe('StatsMmodalComponent', () => {
  let component: StatsModalComponent;
  let fixture: ComponentFixture<StatsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsModalComponent]
    });
    fixture = TestBed.createComponent(StatsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
