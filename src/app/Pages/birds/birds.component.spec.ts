import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsComponent } from './birds.component';

describe('BirdsComponent', () => {
  let component: BirdsComponent;
  let fixture: ComponentFixture<BirdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirdsComponent]
    });
    fixture = TestBed.createComponent(BirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
