import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerComponent } from './saller.component';

describe('SallerComponent', () => {
  let component: SallerComponent;
  let fixture: ComponentFixture<SallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
