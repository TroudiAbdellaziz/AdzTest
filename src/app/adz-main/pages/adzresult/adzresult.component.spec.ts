import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzresultComponent } from './adzresult.component';

describe('AdzresultComponent', () => {
  let component: AdzresultComponent;
  let fixture: ComponentFixture<AdzresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
