import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPaiComponent } from './tela-pai.component';

describe('TelaPaiComponent', () => {
  let component: TelaPaiComponent;
  let fixture: ComponentFixture<TelaPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaPaiComponent]
    });
    fixture = TestBed.createComponent(TelaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
