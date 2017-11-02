import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRestaurantComponent } from './detalhe-restaurant.component';

describe('DetalheRestaurantComponent', () => {
  let component: DetalheRestaurantComponent;
  let fixture: ComponentFixture<DetalheRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
