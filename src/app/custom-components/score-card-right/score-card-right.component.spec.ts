import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardRightComponent } from './score-card-right.component';

describe('ScoreCardRightComponent', () => {
  let component: ScoreCardRightComponent;
  let fixture: ComponentFixture<ScoreCardRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCardRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
