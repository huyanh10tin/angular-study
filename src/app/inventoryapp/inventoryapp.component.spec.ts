import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryappComponent } from './inventoryapp.component';

describe('InventoryappComponent', () => {
  let component: InventoryappComponent;
  let fixture: ComponentFixture<InventoryappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
