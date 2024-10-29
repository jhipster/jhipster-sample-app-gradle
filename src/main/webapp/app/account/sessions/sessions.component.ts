import { Component, OnInit, inject } from '@angular/core';

import SharedModule from 'app/shared/shared.module';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { Session } from './session.model';
import { SessionsService } from './sessions.service';

@Component({
  standalone: true,
  selector: 'jhi-sessions',
  imports: [SharedModule],
  templateUrl: './sessions.component.html',
})
export default class SessionsComponent implements OnInit {
  account: Account | null = null;
  error = false;
  success = false;
  sessions: Session[] = [];

  private readonly sessionsService = inject(SessionsService);
  private readonly accountService = inject(AccountService);

  ngOnInit(): void {
    this.sessionsService.findAll().subscribe(sessions => (this.sessions = sessions));

    this.accountService.identity().subscribe(account => (this.account = account));
  }

  invalidate(series: string): void {
    this.error = false;
    this.success = false;

    this.sessionsService.delete(encodeURIComponent(series)).subscribe({
      next: () => {
        this.success = true;
        this.sessionsService.findAll().subscribe(sessions => (this.sessions = sessions));
      },
      error: () => (this.error = true),
    });
  }
}
