import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagickyKrouzekPage } from './magicky-krouzek.page';

describe('MagickyKrouzekPage', () => {
  let component: MagickyKrouzekPage;
  let fixture: ComponentFixture<MagickyKrouzekPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MagickyKrouzekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagickyKrouzekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
