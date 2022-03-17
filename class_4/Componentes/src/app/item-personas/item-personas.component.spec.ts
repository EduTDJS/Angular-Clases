import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPersonasComponent } from './item-personas.component';

describe('ItemPersonasComponent', () => {
  let component: ItemPersonasComponent;
  let fixture: ComponentFixture<ItemPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
