import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AksharamalaPage } from './aksharamala.page';

describe('AksharamalaPage', () => {
  let component: AksharamalaPage;
  let fixture: ComponentFixture<AksharamalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksharamalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AksharamalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
