import { TestBed } from '@angular/core/testing';

import { DataColorService } from './data-color.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Colour } from './colors';

describe('DataColorService', () => {
  let service: DataColorService;
  let httpClient: HttpClient;
  let httpTestingcontroller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DataColorService
      ]
    });
    service = TestBed.inject(DataColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // empezar con la instancia del httpclient
  httpClient = TestBed.inject(HttpClient);
  httpTestingcontroller = TestBed.inject(HttpTestingController);
  service = TestBed.inject(DataColorService);

  // comprueba que no hay peticiones pendientes
  afterEach(() => {
    httpTestingcontroller.verify();
  });

  describe('getColors', () => {
    let expectedColors: Colour[];

    it('should return expected colors by calling once', () => {
      service.getColors().subscribe(
        colors => expect(colors).toEqual(expectedColors, 'should return expected color'),
        fail
      );
      const request = httpTestingcontroller.expectOne(service.colorUrl);
      expect(request.request.method).toEqual('GET');

      request.flush(expectedColors);
    });
  });
});
