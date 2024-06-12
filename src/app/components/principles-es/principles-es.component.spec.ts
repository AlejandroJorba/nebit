import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplesEsComponent } from './principles-es.component';

describe('PrinciplesEsComponent', () => {
  let component: PrinciplesEsComponent;
  let fixture: ComponentFixture<PrinciplesEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrinciplesEsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrinciplesEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
