import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorralonMaterialsComponent } from './corralon-materials.component';

describe('CorralonMaterialsComponent', () => {
  let component: CorralonMaterialsComponent;
  let fixture: ComponentFixture<CorralonMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorralonMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorralonMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
