import { TestBed } from '@angular/core/testing';

import { MiaHelpEditorService } from './mia-help-editor.service';

describe('MiaHelpEditorService', () => {
  let service: MiaHelpEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaHelpEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
