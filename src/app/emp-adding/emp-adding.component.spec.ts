import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddingComponent } from './emp-adding.component';

describe('EmpAddingComponent', () => {
  let component: EmpAddingComponent;
  let fixture: ComponentFixture<EmpAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
