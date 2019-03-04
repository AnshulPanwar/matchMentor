import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateListLeftComponent } from './candidate-list-left.component';

describe('CandidateListLeftComponent', () => {
  let component: CandidateListLeftComponent;
  let fixture: ComponentFixture<CandidateListLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateListLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateListLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
