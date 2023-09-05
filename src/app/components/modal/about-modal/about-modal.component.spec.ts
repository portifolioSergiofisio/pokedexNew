import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutModalComponent } from './about-modal.component';

describe('AboutMmodalComponent', () => {
  let component: AboutModalComponent;
  let fixture: ComponentFixture<AboutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutModalComponent]
    });
    fixture = TestBed.createComponent(AboutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
