import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddingComponent } from './user-adding.component';

describe('UserAddingComponent', () => {
  let component: UserAddingComponent;
  let fixture: ComponentFixture<UserAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
