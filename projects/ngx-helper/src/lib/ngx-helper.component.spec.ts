import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHelperComponent } from './ngx-helper.component';

describe('NgxHelperComponent', () => {
  let component: NgxHelperComponent;
  let fixture: ComponentFixture<NgxHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
