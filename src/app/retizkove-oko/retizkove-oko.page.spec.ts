import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetizkoveOkoPage } from './retizkove-oko.page';

describe('RetizkoveOkoPage', () => {
  let component: RetizkoveOkoPage;
  let fixture: ComponentFixture<RetizkoveOkoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RetizkoveOkoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetizkoveOkoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
