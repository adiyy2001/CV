import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPartComponent } from './hero-part.component';

describe('HeroPartComponent', () => {
  let component: HeroPartComponent;
  let fixture: ComponentFixture<HeroPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
