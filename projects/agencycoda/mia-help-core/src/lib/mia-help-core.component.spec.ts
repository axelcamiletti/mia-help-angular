import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaHelpCoreComponent } from './mia-help-core.component';

describe('MiaHelpCoreComponent', () => {
  let component: MiaHelpCoreComponent;
  let fixture: ComponentFixture<MiaHelpCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaHelpCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaHelpCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
