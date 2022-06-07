/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterapiService } from './registerapi.service';

describe('Service: Registerapi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterapiService]
    });
  });

  it('should ...', inject([RegisterapiService], (service: RegisterapiService) => {
    expect(service).toBeTruthy();
  }));
});
