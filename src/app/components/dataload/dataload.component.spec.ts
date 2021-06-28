import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataloadComponent } from './dataload.component';

describe('HomeComponent', () => {
  let component: DataloadComponent;
  let fixture: ComponentFixture<DataloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
