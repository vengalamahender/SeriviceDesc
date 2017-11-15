import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoreFormComponent } from './new-store-form.component';

describe('NewStoreFormComponent', () => {
  let component: NewStoreFormComponent;
  let fixture: ComponentFixture<NewStoreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
