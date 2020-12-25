import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployerhomePage } from './employerhome.page';

describe('EmployerhomePage', () => {
  let component: EmployerhomePage;
  let fixture: ComponentFixture<EmployerhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployerhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
