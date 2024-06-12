import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEsComponent } from './hero-es.component';

describe('HeroEsComponent', () => {
  let component: HeroEsComponent;
  let fixture: ComponentFixture<HeroEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroEsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
