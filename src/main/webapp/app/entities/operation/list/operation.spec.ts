import { HttpHeaders, HttpResponse, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faPencilAlt, faPlus, faSort, faSortDown, faSortUp, faSync, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, of } from 'rxjs';

import { sampleWithRequiredData } from '../operation.test-samples';
import { OperationService } from '../service/operation.service';

import { Operation } from './operation';

describe('Operation Management Component', () => {
  let comp: Operation;
  let fixture: ComponentFixture<Operation>;
  let service: OperationService;
  let routerNavigateSpy: jest.SpyInstance<Promise<boolean>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              defaultSort: 'id,asc',
            }),
            queryParamMap: of(
              convertToParamMap({
                page: '1',
                size: '1',
                sort: 'id,desc',
              }),
            ),
            snapshot: {
              queryParams: {},
              queryParamMap: convertToParamMap({
                page: '1',
                size: '1',
                sort: 'id,desc',
              }),
            },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(Operation);
    comp = fixture.componentInstance;
    service = TestBed.inject(OperationService);
    routerNavigateSpy = jest.spyOn(comp.router, 'navigate');

    jest
      .spyOn(service, 'query')
      .mockReturnValueOnce(
        of(
          new HttpResponse({
            body: [{ id: 13822 }],
            headers: new HttpHeaders({
              link: '<http://localhost/api/foo?page=1&size=20>; rel="next"',
            }),
          }),
        ),
      )
      .mockReturnValueOnce(
        of(
          new HttpResponse({
            body: [{ id: 5986 }],
            headers: new HttpHeaders({
              link: '<http://localhost/api/foo?page=0&size=20>; rel="prev",<http://localhost/api/foo?page=2&size=20>; rel="next"',
            }),
          }),
        ),
      );

    const library = TestBed.inject(FaIconLibrary);
    library.addIcons(faEye, faPencilAlt, faPlus, faSort, faSortDown, faSortUp, faSync, faTimes);
  });

  it('should call load all on init', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenCalled();
    expect(comp.operations()[0]).toEqual(expect.objectContaining({ id: 13822 }));
  });

  describe('trackId', () => {
    it('should forward to operationService', () => {
      const entity = { id: 13822 };
      jest.spyOn(service, 'getOperationIdentifier');
      const id = comp.trackId(entity);
      expect(service.getOperationIdentifier).toHaveBeenCalledWith(entity);
      expect(id).toBe(entity.id);
    });
  });

  it('should calculate the sort attribute for a non-id attribute', () => {
    // WHEN
    comp.navigateToWithComponentValues({ predicate: 'non-existing-column', order: 'asc' });

    // THEN
    expect(routerNavigateSpy).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.objectContaining({
        queryParams: expect.objectContaining({
          sort: ['non-existing-column,asc'],
        }),
      }),
    );
  });

  it('should calculate the sort attribute for an id', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenLastCalledWith(expect.objectContaining({ sort: ['id,desc'] }));
  });

  it('should infinite scroll', () => {
    // GIVEN
    comp.loadNextPage();
    comp.loadNextPage();
    comp.loadNextPage();

    // THEN
    expect(service.query).toHaveBeenCalledTimes(3);
    expect(service.query).toHaveBeenNthCalledWith(2, expect.objectContaining({ page: '1' }));
    expect(service.query).toHaveBeenLastCalledWith(expect.objectContaining({ page: '2' }));
  });

  describe('delete', () => {
    let ngbModal: NgbModal;
    let deleteModalMock: any;

    beforeEach(() => {
      deleteModalMock = { componentInstance: {}, closed: new Subject() };
      // NgbModal is not a singleton using TestBed.inject.
      // ngbModal = TestBed.inject(NgbModal);
      ngbModal = (comp as any).modalService;
      jest.spyOn(ngbModal, 'open').mockReturnValue(deleteModalMock);
    });

    it('on confirm should call load', inject([], () => {
      // GIVEN
      jest.spyOn(comp, 'load');

      // WHEN
      comp.delete(sampleWithRequiredData);
      deleteModalMock.closed.next('deleted');

      // THEN
      expect(ngbModal.open).toHaveBeenCalled();
      expect(comp.load).toHaveBeenCalled();
    }));

    it('on dismiss should call load', inject([], () => {
      // GIVEN
      jest.spyOn(comp, 'load');

      // WHEN
      comp.delete(sampleWithRequiredData);
      deleteModalMock.closed.next();

      // THEN
      expect(ngbModal.open).toHaveBeenCalled();
      expect(comp.load).not.toHaveBeenCalled();
    }));
  });
});
