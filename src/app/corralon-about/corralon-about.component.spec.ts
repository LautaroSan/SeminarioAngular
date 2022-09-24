import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorralonAboutComponent } from './corralon-about.component';

describe('CorralonAboutComponent', () => {
  let component: CorralonAboutComponent;
  let fixture: ComponentFixture<CorralonAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorralonAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorralonAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
