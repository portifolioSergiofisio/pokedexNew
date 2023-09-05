import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHeaderComponent } from './header-modal.component';

describe('HeaderModalComponent', () => {
  let component: ModalHeaderComponent;
  let fixture: ComponentFixture<ModalHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHeaderComponent]
    });
    fixture = TestBed.createComponent(ModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
