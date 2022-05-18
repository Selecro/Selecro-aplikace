import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolodlouhySloupekPage } from './polodlouhy-sloupek.page';

describe('PolodlouhySloupekPage', () => {
  let component: PolodlouhySloupekPage;
  let fixture: ComponentFixture<PolodlouhySloupekPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolodlouhySloupekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolodlouhySloupekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
