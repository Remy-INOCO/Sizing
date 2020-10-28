import { TestBed } from '@angular/core/testing';

import { SizingService } from './sizing.service';
import {HttpClient} from "@angular/common/http";

describe('SizingService', () => {
  let service: SizingService;
  let httpClientSpy: { get: jasmine.Spy; };


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SizingService(<any>httpClientSpy);

    TestBed.configureTestingModule({imports: [],providers: [{provide: HttpClient, useValue: httpClientSpy}]});
  });

  xit('should be get default value', () => {
    httpClientSpy.get.and.returnValue({name: 'toto', size: 123, imageUrl:'', description: 'super description', weight: 321, wikiUrl: 'http://wiki.com'});

    service.getInitData().subscribe(response => {
      expect(response).toEqual({name: 'toto', size: 123, imageUrl:'', description: 'super description', weight: 321, wikiUrl: 'http://wiki.com'})
    })
  });
});
