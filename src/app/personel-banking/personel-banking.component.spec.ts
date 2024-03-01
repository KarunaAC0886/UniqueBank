import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelBankingComponent } from './personel-banking.component';

describe('PersonelBankingComponent', () => {
  let component: PersonelBankingComponent;
  let fixture: ComponentFixture<PersonelBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonelBankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonelBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
