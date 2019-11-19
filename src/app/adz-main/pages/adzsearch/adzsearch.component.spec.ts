import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzsearchComponent } from './adzsearch.component';

describe('AdzsearchComponent', () => {
  let component: AdzsearchComponent;
  let fixture: ComponentFixture<AdzsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
