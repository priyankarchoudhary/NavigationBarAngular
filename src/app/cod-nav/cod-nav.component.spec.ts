import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodNavComponent } from './cod-nav.component';

describe('CodNavComponent', () => {
  let component: CodNavComponent;
  let fixture: ComponentFixture<CodNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
