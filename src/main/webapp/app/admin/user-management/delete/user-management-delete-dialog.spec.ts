import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';

import { UserManagementService } from '../service/user-management.service';

import UserManagementDeleteDialog from './user-management-delete-dialog';

describe('User Management Delete Component', () => {
  let comp: UserManagementDeleteDialog;
  let fixture: ComponentFixture<UserManagementDeleteDialog>;
  let service: UserManagementService;
  let mockActiveModal: NgbActiveModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), NgbActiveModal],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementDeleteDialog);
    comp = fixture.componentInstance;
    service = TestBed.inject(UserManagementService);
    mockActiveModal = TestBed.inject(NgbActiveModal);
  });

  describe('confirmDelete', () => {
    it('should call delete service on confirmDelete', () => {
      // GIVEN
      jest.spyOn(service, 'delete').mockReturnValue(of({}));
      jest.spyOn(mockActiveModal, 'close');

      // WHEN
      comp.confirmDelete('user');

      // THEN
      expect(service.delete).toHaveBeenCalledWith('user');
      expect(mockActiveModal.close).toHaveBeenCalledWith('deleted');
    });
  });
});
