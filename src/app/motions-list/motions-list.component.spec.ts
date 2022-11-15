import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionsListComponent } from './motions-list.component';

describe('MotionsListComponent', () => {
  let component: MotionsListComponent;
  let fixture: ComponentFixture<MotionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
