import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFinderComponent } from './error-finder.component';

describe('ErrorFinderComponent', () => {
  let component: ErrorFinderComponent;
  let fixture: ComponentFixture<ErrorFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
