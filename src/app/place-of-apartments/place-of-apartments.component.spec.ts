import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOfApartmentsComponent } from './place-of-apartments.component';

describe('PlaceOfApartmentsComponent', () => {
  let component: PlaceOfApartmentsComponent;
  let fixture: ComponentFixture<PlaceOfApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceOfApartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOfApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
