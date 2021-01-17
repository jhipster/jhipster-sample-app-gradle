jest.mock('app/core/auth/account.service');

import { ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';

import { Session } from './session.model';
import { SessionsComponent } from './sessions.component';
import { SessionsService } from './sessions.service';

describe('Component Tests', () => {
  let fixture: ComponentFixture<SessionsComponent>;
  let comp: SessionsComponent;
  const sessions: Session[] = [new Session('xxxxxx==', new Date(2015, 10, 15), '0:0:0:0:0:0:0:1', 'Mozilla/5.0')];
  const account: Account = {
    firstName: 'John',
    lastName: 'Doe',
    activated: true,
    email: 'john.doe@mail.com',
    langKey: 'en',
    login: 'john',
    authorities: [],
    imageUrl: '',
  };

  describe('SessionsComponent', () => {
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [SessionsComponent],
        providers: [AccountService],
      })
        .overrideTemplate(SessionsComponent, '')
        .createComponent(SessionsComponent);
      comp = fixture.componentInstance;
    });

    it('should define its initial state', inject(
      [AccountService, SessionsService],
      fakeAsync((mockAccountService: AccountService, service: SessionsService) => {
        mockAccountService.identity = jest.fn(() => of(account));
        spyOn(service, 'findAll').and.returnValue(of(sessions));

        comp.ngOnInit();
        tick();

        expect(mockAccountService.identity).toHaveBeenCalled();
        expect(service.findAll).toHaveBeenCalled();
        expect(comp.success).toBe(false);
        expect(comp.error).toBe(false);
        expect(comp.account).toEqual(account);
        expect(comp.sessions).toEqual(sessions);
      })
    ));

    it('should call delete on Sessions to invalidate a session', inject(
      [AccountService, SessionsService],
      fakeAsync((mockAccountService: AccountService, service: SessionsService) => {
        mockAccountService.identity = jest.fn(() => of(account));
        spyOn(service, 'findAll').and.returnValue(of(sessions));
        spyOn(service, 'delete').and.returnValue(of({}));

        comp.ngOnInit();
        comp.invalidate('xyz');
        tick();

        expect(service.delete).toHaveBeenCalledWith('xyz');
      })
    ));

    it('should call delete on Sessions and notify of error', inject(
      [AccountService, SessionsService],
      fakeAsync((mockAccountService: AccountService, service: SessionsService) => {
        mockAccountService.identity = jest.fn(() => of(account));
        spyOn(service, 'findAll').and.returnValue(of(sessions));
        spyOn(service, 'delete').and.returnValue(throwError({}));

        comp.ngOnInit();
        comp.invalidate('xyz');
        tick();

        expect(comp.success).toBe(false);
        expect(comp.error).toBe(true);
      })
    ));

    it('should call notify of success upon session invalidation', inject(
      [AccountService, SessionsService],
      fakeAsync((mockAccountService: AccountService, service: SessionsService) => {
        mockAccountService.identity = jest.fn(() => of(account));
        spyOn(service, 'findAll').and.returnValue(of(sessions));
        spyOn(service, 'delete').and.returnValue(of({}));

        comp.ngOnInit();
        comp.invalidate('xyz');
        tick();

        expect(comp.error).toBe(false);
        expect(comp.success).toBe(true);
      })
    ));
  });
});
