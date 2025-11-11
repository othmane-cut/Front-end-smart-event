import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpswComponent } from './forgetpsw.component';

describe('ForgetpswComponent', () => {
  let component: ForgetpswComponent;
  let fixture: ComponentFixture<ForgetpswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetpswComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
