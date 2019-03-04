import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadidateListRightComponent } from './cadidate-list-right.component';

describe('CadidateListRightComponent', () => {
  let component: CadidateListRightComponent;
  let fixture: ComponentFixture<CadidateListRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadidateListRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadidateListRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
