import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwadhyayamcqsPage } from './swadhyayamcqs.page';

describe('SwadhyayamcqsPage', () => {
  let component: SwadhyayamcqsPage;
  let fixture: ComponentFixture<SwadhyayamcqsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwadhyayamcqsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwadhyayamcqsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
