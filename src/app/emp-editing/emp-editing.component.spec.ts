import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEditingComponent } from './emp-editing.component';

describe('EmpEditingComponent', () => {
  let component: EmpEditingComponent;
  let fixture: ComponentFixture<EmpEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
