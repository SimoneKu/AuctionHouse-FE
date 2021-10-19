import { TestBed, inject } from '@angular/core/testing';

import { RicercaCartaService } from './ricerca-carta.service';

describe('RicercaCartaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RicercaCartaService]
    });
  });

  it('should be created', inject([RicercaCartaService], (service: RicercaCartaService) => {
    expect(service).toBeTruthy();
  }));
});
