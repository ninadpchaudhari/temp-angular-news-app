import { TestBed } from '@angular/core/testing';

import { DummyServerService } from './dummy-server.service';

describe('DummyServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyServerService = TestBed.get(DummyServerService);
    expect(service).toBeTruthy();
  });
});
