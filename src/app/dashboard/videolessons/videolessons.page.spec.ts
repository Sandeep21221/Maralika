import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideolessonsPage } from './videolessons.page';

describe('VideolessonsPage', () => {
  let component: VideolessonsPage;
  let fixture: ComponentFixture<VideolessonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolessonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideolessonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
