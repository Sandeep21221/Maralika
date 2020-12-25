import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AkshcoursePage } from './akshcourse.page';

describe('AkshcoursePage', () => {
  let component: AkshcoursePage;
  let fixture: ComponentFixture<AkshcoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkshcoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AkshcoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
