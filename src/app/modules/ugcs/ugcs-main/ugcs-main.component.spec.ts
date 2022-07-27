import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcsMainComponent } from './ugcs-main.component';

describe('UgcsMainComponent', () => {
  let component: UgcsMainComponent;
  let fixture: ComponentFixture<UgcsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgcsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgcsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
