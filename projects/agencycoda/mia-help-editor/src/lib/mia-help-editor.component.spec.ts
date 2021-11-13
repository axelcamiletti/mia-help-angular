import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaHelpEditorComponent } from './mia-help-editor.component';

describe('MiaHelpEditorComponent', () => {
  let component: MiaHelpEditorComponent;
  let fixture: ComponentFixture<MiaHelpEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaHelpEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaHelpEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
