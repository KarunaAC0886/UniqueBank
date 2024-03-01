import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantinfoComponent } from './importantinfo.component';

describe('ImportantinfoComponent', () => {
  let component: ImportantinfoComponent;
  let fixture: ComponentFixture<ImportantinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportantinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
