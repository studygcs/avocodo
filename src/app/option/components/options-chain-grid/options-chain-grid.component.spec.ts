import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsChainGridComponent } from './options-chain-grid.component';

describe('OptionsChainGridComponent', () => {
  let component: OptionsChainGridComponent;
  let fixture: ComponentFixture<OptionsChainGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsChainGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsChainGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
