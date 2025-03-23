import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProfessorComponent } from './manage-professor.component';

describe('ManageProfessorComponent', () => {
  let component: ManageProfessorComponent;
  let fixture: ComponentFixture<ManageProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
