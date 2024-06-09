import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KataHfrComponent } from './kata-hfr.component';

describe('KataHfrComponent', () => {
  let component: KataHfrComponent;
  let fixture: ComponentFixture<KataHfrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KataHfrComponent]
    });
    fixture = TestBed.createComponent(KataHfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
