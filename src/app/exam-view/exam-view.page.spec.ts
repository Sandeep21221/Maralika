import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamViewPage } from './exam-view.page';

describe('ExamViewPage', () => {
  let component: ExamViewPage;
  let fixture: ComponentFixture<ExamViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
