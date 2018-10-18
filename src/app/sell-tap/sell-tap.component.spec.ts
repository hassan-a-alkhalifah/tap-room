import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellTapComponent } from './sell-tap.component';

describe('SellTapComponent', () => {
  let component: SellTapComponent;
  let fixture: ComponentFixture<SellTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
