import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { Authority } from 'app/config/authority.constants';
import { UserManagementService } from '../service/user-management.service';
import { User } from '../user-management.model';

import UserManagementUpdate from './user-management-update';

describe('User Management Update Component', () => {
  let comp: UserManagementUpdate;
  let fixture: ComponentFixture<UserManagementUpdate>;
  let service: UserManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ user: new User(123, 'user', 'first', 'last', 'first@last.com', true, 'en', [Authority.USER], 'admin') }),
          },
        },
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementUpdate);
    comp = fixture.componentInstance;
    service = TestBed.inject(UserManagementService);
  });

  describe('OnInit', () => {
    it('should load authorities and language on init', inject([], () => {
      // GIVEN
      jest.spyOn(service, 'authorities').mockReturnValue(of(['USER']));

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.authorities).toHaveBeenCalled();
      expect(comp.authorities()).toEqual(['USER']);
    }));
  });

  describe('save', () => {
    it('should call update service on save for existing user', inject([], () => {
      // GIVEN
      const entity = { id: 123 };
      jest.spyOn(service, 'update').mockReturnValue(of(entity));
      comp.editForm.patchValue(entity);
      // WHEN
      comp.save();

      // THEN
      expect(service.update).toHaveBeenCalledWith(expect.objectContaining(entity));
      expect(comp.isSaving()).toEqual(false);
    }));

    it('should call create service on save for new user', inject([], () => {
      // GIVEN
      const entity = { login: 'foo' } as User;
      jest.spyOn(service, 'create').mockReturnValue(of(entity));
      comp.editForm.patchValue(entity);
      // WHEN
      comp.save();

      // THEN
      expect(comp.editForm.getRawValue().id).toBeNull();
      expect(service.create).toHaveBeenCalledWith(expect.objectContaining(entity));
      expect(comp.isSaving()).toEqual(false);
    }));
  });
});
