import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';

fdescribe('LoginService', () => {
  let service: LoginService;
  let htppTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    htppTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    htppTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to the login API', () => {
    const expectedResponse: ResponseLogin = { jwt: 'dksanfdosdaknfgadsng' };
    const requestLogin: RequestLogin = {
      login: "teste",
      password: "teste"
    }

    service.login(requestLogin).subscribe((res: ResponseLogin) => {
      expect(res).toEqual(expectedResponse);
      expect(res.jwt).toBe('dksanfdosdaknfgadsng');
    })

    const mockRequest = htppTestingController.expectOne('http://localhost:8080/api/login');

    expect(mockRequest.request.method).toBe('POST');
    expect(mockRequest.request.body).toEqual(requestLogin);
    mockRequest.flush(expectedResponse);


  })
});
