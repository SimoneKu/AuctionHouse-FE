import { TestBed, inject } from '@angular/core/testing';

import { CartaService } from './carta.service';

describe('CartaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartaService]
    });
  });

  it('should be created', inject([CartaService], (service: CartaService) => {
    expect(service).toBeTruthy();
  }));
});
