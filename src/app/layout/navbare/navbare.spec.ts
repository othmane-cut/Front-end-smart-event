import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbare } from './navbare';

describe('Navbare', () => {
  let component: Navbare;
  let fixture: ComponentFixture<Navbare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
