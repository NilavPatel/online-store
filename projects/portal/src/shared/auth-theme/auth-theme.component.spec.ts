import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthThemeComponent } from './auth-theme.component';

describe('AuthThemeComponent', () => {
  let component: AuthThemeComponent;
  let fixture: ComponentFixture<AuthThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
