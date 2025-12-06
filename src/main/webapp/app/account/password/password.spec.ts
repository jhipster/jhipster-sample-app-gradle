import { HttpResponse, provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of, throwError } from 'rxjs';

import { AccountService } from 'app/core/auth/account.service';

import Password from './password';
import { PasswordService } from './password.service';

describe('Password', () => {
  let comp: Password;
  let fixture: ComponentFixture<Password>;
  let service: PasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        {
          provide: AccountService,
          useValue: {
            isAuthenticated: jest.fn(),
          },
        },
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Password);
    comp = fixture.componentInstance;
    service = TestBed.inject(PasswordService);
  });

  it('should show error if passwords do not match', () => {
    // GIVEN
    comp.passwordForm.patchValue({
      newPassword: 'password1',
      confirmPassword: 'password2',
    });
    // WHEN
    comp.changePassword();
    // THEN
    expect(comp.doNotMatch()).toBe(true);
    expect(comp.error()).toBe(false);
    expect(comp.success()).toBe(false);
  });

  it('should call Auth.changePassword when passwords match', () => {
    // GIVEN
    const passwordValues = {
      currentPassword: 'oldPassword',
      newPassword: 'myPassword',
    };

    jest.spyOn(service, 'save').mockReturnValue(of(new HttpResponse({ body: true })));

    comp.passwordForm.patchValue({
      currentPassword: passwordValues.currentPassword,
      newPassword: passwordValues.newPassword,
      confirmPassword: passwordValues.newPassword,
    });

    // WHEN
    comp.changePassword();

    // THEN
    expect(service.save).toHaveBeenCalledWith(passwordValues.newPassword, passwordValues.currentPassword);
  });

  it('should set success to true upon success', () => {
    // GIVEN
    jest.spyOn(service, 'save').mockReturnValue(of(new HttpResponse({ body: true })));
    comp.passwordForm.patchValue({
      newPassword: 'myPassword',
      confirmPassword: 'myPassword',
    });

    // WHEN
    comp.changePassword();

    // THEN
    expect(comp.doNotMatch()).toBe(false);
    expect(comp.error()).toBe(false);
    expect(comp.success()).toBe(true);
  });

  it('should notify of error if change password fails', () => {
    // GIVEN
    jest.spyOn(service, 'save').mockReturnValue(throwError(Error));
    comp.passwordForm.patchValue({
      newPassword: 'myPassword',
      confirmPassword: 'myPassword',
    });

    // WHEN
    comp.changePassword();

    // THEN
    expect(comp.doNotMatch()).toBe(false);
    expect(comp.success()).toBe(false);
    expect(comp.error()).toBe(true);
  });
});
