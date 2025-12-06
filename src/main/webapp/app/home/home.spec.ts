import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { Subject, of } from 'rxjs';

import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';

import Home from './home';

describe('Home Component', () => {
  let comp: Home;
  let fixture: ComponentFixture<Home>;
  let mockAccountService: AccountService;
  let mockRouter: Router;
  const account: Account = {
    activated: true,
    authorities: [],
    email: '',
    firstName: null,
    langKey: '',
    lastName: null,
    login: 'login',
    imageUrl: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
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
    fixture = TestBed.createComponent(Home);
    comp = fixture.componentInstance;
    mockAccountService = TestBed.inject(AccountService);
    mockAccountService.identity = jest.fn(() => of(null));

    mockRouter = TestBed.inject(Router);
    jest.spyOn(mockRouter, 'navigate');
  });

  describe('ngOnInit', () => {
    it('should synchronize account variable with current account', () => {
      // GIVEN
      const authenticationState = new Subject<Account | null>();
      mockAccountService.getAuthenticationState = jest.fn(() => authenticationState.asObservable());

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.account()).toBeNull();

      // WHEN
      authenticationState.next(account);

      // THEN
      expect(comp.account()).toEqual(account);

      // WHEN
      authenticationState.next(null);

      // THEN
      expect(comp.account()).toBeNull();
    });
  });

  describe('login', () => {
    it('should navigate to /login on login', () => {
      // WHEN
      comp.login();

      // THEN
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    });
  });

  describe('ngOnDestroy', () => {
    it('should destroy authentication state subscription on component destroy', () => {
      // GIVEN
      const authenticationState = new Subject<Account | null>();
      mockAccountService.getAuthenticationState = jest.fn(() => authenticationState.asObservable());

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.account()).toBeNull();

      // WHEN
      authenticationState.next(account);

      // THEN
      expect(comp.account()).toEqual(account);

      // WHEN
      comp.ngOnDestroy();
      authenticationState.next(null);

      // THEN
      expect(comp.account()).toEqual(account);
    });
  });
});
