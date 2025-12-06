import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import SharedModule from 'app/shared/shared.module';

import { PasswordResetInitService } from './password-reset-init.service';

@Component({
  selector: 'jhi-password-reset-init',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './password-reset-init.html',
})
export default class PasswordResetInit implements AfterViewInit {
  email = viewChild.required<ElementRef>('email');

  success = signal(false);
  resetRequestForm;

  private readonly passwordResetInitService = inject(PasswordResetInitService);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.resetRequestForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    });
  }

  ngAfterViewInit(): void {
    this.email().nativeElement.focus();
  }

  requestReset(): void {
    this.passwordResetInitService.save(this.resetRequestForm.get(['email'])!.value).subscribe({
      next: () => this.success.set(true),
      error() {
        // Ignore error
      },
    });
  }
}
