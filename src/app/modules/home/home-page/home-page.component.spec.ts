import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a main title', () => {
    const titleElement = fixture.nativeElement.querySelector('h1#main-text');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('TFM Soluciones');
  });

  it('should have a paragraph with company description', () => {
    const descriptionElement = fixture.nativeElement.querySelector('.text-center');
    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement.textContent).toContain('Empresa dedicada al manejo y explotación de servicios relacionados con equipos UAVs');
  });
});
