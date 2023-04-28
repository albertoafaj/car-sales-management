import { TestBed } from '@angular/core/testing';
import { AlertService } from './alert.service';
import Swal from 'sweetalert2';

fdescribe('AlertService', () => {
  let service: AlertService;
  let swalSpy: jasmine.SpyObj<typeof Swal>;

  beforeEach(() => {
    swalSpy = jasmine.createSpyObj('Swal', ['fire']);
    TestBed.configureTestingModule({
      providers: [{ provide: Swal, useValue: swalSpy }]
    });
    service = new AlertService(swalSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('success', () => {
    it('should call showAlert with the correct arguments', () => {
      service.success('Test Message', 'Test Title');
      expect(swalSpy.fire).toHaveBeenCalledWith('Test Title', 'Test Message', 'success');
    });


  });

  describe('info', () => {
    it('should call showAlert with the correct arguments', () => {
      service.info('Test Message', 'Test Title');
      expect(swalSpy.fire).toHaveBeenCalledWith('Test Title', 'Test Message', 'info');
    });
  });

  describe('error', () => {
    it('should call showAlert with the correct arguments', () => {
      service.error('Test Message', 'Test Title');
      expect(swalSpy.fire).toHaveBeenCalledWith('Test Title', 'Test Message', 'error');
    });
  });
});
