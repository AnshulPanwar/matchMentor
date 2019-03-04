import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTreeComponent } from './match-tree.component';

describe('MatchTreeComponent', () => {
  let component: MatchTreeComponent;
  let fixture: ComponentFixture<MatchTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
