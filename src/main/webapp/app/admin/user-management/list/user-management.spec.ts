import { HttpHeaders, HttpResponse, provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { AccountService } from 'app/core/auth/account.service';
import { UserManagementService } from '../service/user-management.service';
import { User } from '../user-management.model';

import UserManagement from './user-management';

describe('User Management Component', () => {
  let comp: UserManagement;
  let fixture: ComponentFixture<UserManagement>;
  let service: UserManagementService;
  let mockAccountService: AccountService;
  const data = of({
    defaultSort: 'id,asc',
  });

  beforeEach(() => {
    const queryParamMap = of(
      convertToParamMap({
        page: '1',
        size: '1',
        sort: 'id,desc',
      }),
    );
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [provideHttpClient(), AccountService, { provide: ActivatedRoute, useValue: { data, queryParamMap } }],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagement);
    comp = fixture.componentInstance;
    service = TestBed.inject(UserManagementService);
    mockAccountService = TestBed.inject(AccountService);
    mockAccountService.isAuthenticated = jest.fn(() => false);
    mockAccountService.identity = jest.fn(() => of(null));
  });

  describe('OnInit', () => {
    it('should call load all on init', inject([], () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      jest.spyOn(service, 'query').mockReturnValue(
        of(
          new HttpResponse({
            body: [new User(123)],
            headers,
          }),
        ),
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.users()?.[0]).toEqual(expect.objectContaining({ id: 123 }));
    }));
  });

  describe('setActive', () => {
    it('should update user and call load all', inject([], () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      const user = new User(123);
      jest.spyOn(service, 'query').mockReturnValue(
        of(
          new HttpResponse({
            body: [user],
            headers,
          }),
        ),
      );
      jest.spyOn(service, 'update').mockReturnValue(of(user));

      // WHEN
      comp.setActive(user, true);

      // THEN
      expect(service.update).toHaveBeenCalledWith({ ...user, activated: true });
      expect(service.query).toHaveBeenCalled();
      expect(comp.users()?.[0]).toEqual(expect.objectContaining({ id: 123 }));
    }));
  });
});
