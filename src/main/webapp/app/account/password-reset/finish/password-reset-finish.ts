import { AfterViewInit, Component, ElementRef, OnInit, inject, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import PasswordStrengthBar from 'app/account/password/password-strength-bar/password-strength-bar';
import SharedModule from 'app/shared/shared.module';

import { PasswordResetFinishService } from './password-reset-finish.service';

@Component({
  selector: 'jhi-password-reset-finish',
  imports: [SharedModule, RouterLink, ReactiveFormsModule, PasswordStrengthBar],
  templateUrl: './password-reset-finish.html',
})
export default class PasswordResetFinish implements OnInit, AfterViewInit {
  newPassword = viewChild.required<ElementRef>('newPassword');

  initialized = signal(false);
  doNotMatch = signal(false);
  error = signal(false);
  success = signal(false);
  key = signal('');

  passwordForm = new FormGroup({
    newPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    }),
  });

  private readonly passwordResetFinishService = inject(PasswordResetFinishService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.key) {
        this.key.set(params.key);
      }
      this.initialized.set(true);
    });
  }

  ngAfterViewInit(): void {
    this.newPassword().nativeElement.focus();
  }

  finishReset(): void {
    this.doNotMatch.set(false);
    this.error.set(false);

    const { newPassword, confirmPassword } = this.passwordForm.getRawValue();

    if (newPassword === confirmPassword) {
      this.passwordResetFinishService.save(this.key(), newPassword).subscribe({
        next: () => this.success.set(true),
        error: () => this.error.set(true),
      });
    } else {
      this.doNotMatch.set(true);
    }
  }
}
