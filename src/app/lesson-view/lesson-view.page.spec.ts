import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LessonViewPage } from './lesson-view.page';

describe('LessonViewPage', () => {
  let component: LessonViewPage;
  let fixture: ComponentFixture<LessonViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LessonViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
