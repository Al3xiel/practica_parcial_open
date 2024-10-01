import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCardListComponent } from './exam-card-list.component';

describe('ExamCardListComponent', () => {
  let component: ExamCardListComponent;
  let fixture: ComponentFixture<ExamCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
